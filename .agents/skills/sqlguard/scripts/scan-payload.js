#!/usr/bin/env node
const { Detector } = require('sqlguardjs');

const payload = process.argv[2] || "1' OR '1'='1";
const level = process.argv[3] || 'balanced';

console.log(`[SQLGuardJS] Scanning payload (level: ${level}):`);
console.log(`Payload: "${payload}"\n`);

const detector = new Detector({ level });
const result = detector.detect(payload);

const isThreat = result.label !== 'benign';
console.log(`Result: ${isThreat ? '🚨 THREAT BLOCKED' : '✅ BENIGN (ALLOWED)'}`);
console.log(`Threat Type: ${result.label.toUpperCase()}`);
console.log(`Confidence:  ${(result.confidence * 100).toFixed(1)}%`);
console.log(`Scores:      SQLi: ${result.scores.sqli}, XSS: ${result.scores.xss}`);

if (result.matches && result.matches.length > 0) {
  console.log('\nMatched Signals:');
  result.matches.forEach((m) => {
    console.log(` - [${m.id}] (${m.label}) confidence: ${(m.confidence * 100).toFixed(1)}%`);
  });
}
