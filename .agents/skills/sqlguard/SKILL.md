---
name: sqlguard
description: >-
  Detect and block SQL injection (SQLi), Cross-Site Scripting (XSS), and NoSQL injection
  attempts using SQLGuardJS (https://github.com/Chiranth-Janardhan-moger/sqlguardjs).
  Use this skill whenever working on application security, securing API routes,
  request verification, scanning inputs, or setting up injection defense in Node.js,
  Express, and Next.js projects.
---

# SQLGuardJS Security Protection Skill

**SQLGuardJS** is an in-process request verification layer, middleware, and CLI scanner that protects Node.js, Express, and Next.js applications against SQL Injection, Cross-Site Scripting (XSS), and NoSQL injection attacks without requiring external network calls or database overhead.

Repository: [https://github.com/Chiranth-Janardhan-moger/sqlguardjs](https://github.com/Chiranth-Janardhan-moger/sqlguardjs)

---

## Core Capabilities

- **Structural Vector Analysis**: Uses weighted signatures, token analysis, boolean tautology detection, and browser pseudo-protocol parsing.
- **Multi-Vector Defense**:
  - **SQLi**: Detects stacked statements, tautologies (`1=1`, `'a'='a'`), comment breakout (`--`, `/* */`), union queries, metadata extraction (`information_schema`, `sqlite_master`).
  - **XSS**: Detects `<script>` tags, event handlers (`onerror=`, `onload=`), `javascript:` URIs, SVG vectors, and DOM manipulation payloads.
  - **NoSQLi**: Flags MongoDB `$where`, `$gt`, and operator injection patterns in inputs.
- **Ultra-Low Latency**: Runs synchronously in-memory (sub-millisecond evaluation).
- **Three Detection Profiles**:
  - `strict`: High sensitivity (`threshold: 0.25`), best for authentication and sensitive operations.
  - `balanced`: Default recommended profile (`threshold: 0.50`), zero false-positives for typical web text.
  - `permissive`: For markdown/rich-text endpoints (`threshold: 0.85`).

---

## Quick Usage in Next.js

### 1. In Next.js Route Handlers (App Router)

```typescript
import { NextRequest, NextResponse } from "next/server";
import { scanPayload } from "@/lib/security/sqlguard";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const check = scanPayload(body, { level: "balanced" });

  if (check.blocked) {
    return NextResponse.json(
      {
        error: "Forbidden",
        reason: `Potential ${check.result.label.toUpperCase()} attack detected`,
        matches: check.result.matches.map((m) => m.id),
      },
      { status: 403 }
    );
  }

  // Safe to proceed
  return NextResponse.json({ success: true });
}
```

### 2. In Next.js Global Middleware (`src/middleware.ts`)

```typescript
import { NextRequest, NextResponse } from "next/server";
import { scanSearchParams } from "@/lib/security/sqlguard";

export function middleware(req: NextRequest) {
  const check = scanSearchParams(req.nextUrl.searchParams);
  if (check.blocked) {
    return new NextResponse(
      JSON.stringify({ error: "Malicious input blocked", reason: check.result.label }),
      { status: 403, headers: { "content-type": "application/json" } }
    );
  }
  return NextResponse.next();
}
```

### 3. In Server Actions or Functions

```typescript
import { assertSafe } from "@/lib/security/sqlguard";

export async function submitCustomOrder(formData: FormData) {
  const notes = formData.get("notes") as string;
  assertSafe(notes, "custom order notes"); // Throws error if malicious
  // Process order...
}
```

---

## Helper Scripts

- **Test Payload Scanner**:
  Run `node .agents/skills/sqlguard/scripts/scan-payload.js "<test-string>"` to test if any payload or input is flagged.
- **Automated Validation Suite**:
  Run `node .agents/skills/sqlguard/scripts/test-guard.js` to execute real-world SQLi/XSS test attack suites.
