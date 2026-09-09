import { Detector, DetectionResult } from "sqlguardjs";

export interface ScanOutcome {
  blocked: boolean;
  result: DetectionResult;
  offendingKey?: string;
}

const detector = new Detector();

/**
 * Scan a single string for SQLi, XSS, or NoSQL injection.
 */
export function scanString(value: string): ScanOutcome {
  const result = detector.detect(value);
  const blocked = result.label !== "benign";
  return { blocked, result };
}

/**
 * Recursively scan any payload (object, array, string) for injection vectors.
 */
export function scanPayload(payload: unknown): ScanOutcome {
  if (typeof payload === "string") {
    const res = detector.detect(payload);
    return { blocked: res.label !== "benign", result: res };
  }

  if (payload && typeof payload === "object") {
    for (const [key, val] of Object.entries(payload)) {
      // Check key itself
      const keyRes = detector.detect(key);
      if (keyRes.label !== "benign") {
        return { blocked: true, result: keyRes, offendingKey: key };
      }

      // Check values recursively
      if (typeof val === "string") {
        const valRes = detector.detect(val);
        if (valRes.label !== "benign") {
          return { blocked: true, result: valRes, offendingKey: key };
        }
      } else if (val && typeof val === "object") {
        const nested = scanPayload(val);
        if (nested.blocked) {
          return { ...nested, offendingKey: `${key}.${nested.offendingKey || ""}` };
        }
      }
    }
  }

  return {
    blocked: false,
    result: {
      label: "benign",
      confidence: 0,
      scores: { sqli: 0, xss: 0 },
      matches: [],
    },
  };
}

/**
 * Scan URLSearchParams (query string parameters).
 */
export function scanSearchParams(params: URLSearchParams): ScanOutcome {
  for (const [key, value] of params.entries()) {
    const keyRes = detector.detect(key);
    if (keyRes.label !== "benign") {
      return { blocked: true, result: keyRes, offendingKey: key };
    }

    const valRes = detector.detect(value);
    if (valRes.label !== "benign") {
      return { blocked: true, result: valRes, offendingKey: key };
    }
  }

  return {
    blocked: false,
    result: {
      label: "benign",
      confidence: 0,
      scores: { sqli: 0, xss: 0 },
      matches: [],
    },
  };
}

/**
 * Asserts that a value is safe, throwing an error if a threat is detected.
 */
export function assertSafe(value: unknown, label = "input"): void {
  const check = scanPayload(value);
  if (check.blocked) {
    throw new Error(
      `[SQLGuardJS] Malicious ${check.result.label.toUpperCase()} detected in ${label}`
    );
  }
}

