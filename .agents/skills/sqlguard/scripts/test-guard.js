#!/usr/bin/env node
const { Detector } = require('sqlguardjs');

const detector = new Detector({ level: 'balanced' });

const testCases = [
  // SQL Injection tests
  { input: "1' OR '1'='1", expectedThreat: true, type: 'sqli' },
  { input: "admin' --", expectedThreat: true, type: 'sqli' },
  { input: "1; DROP TABLE users;", expectedThreat: true, type: 'sqli' },
  { input: "UNION SELECT null, username, password FROM users", expectedThreat: true, type: 'sqli' },

  // XSS tests
  { input: "<script>alert('pwned')</script>", expectedThreat: true, type: 'xss' },
  { input: "<img src=x onerror=alert(1)>", expectedThreat: true, type: 'xss' },
  { input: "javascript:alert(document.cookie)", expectedThreat: true, type: 'xss' },

  // Benign normal flower shop queries and inputs
  { input: "Red velvet roses bouquet with gypsophila", expectedThreat: false },
  { input: "Grand Tiered Confectionery Tower for wedding", expectedThreat: false },
  { input: "Please deliver at 6:30 PM on Saturday", expectedThreat: false },
  { input: "Lady Vivienne Montgomery", expectedThreat: false },
  { input: "+91 91776 56499", expectedThreat: false },
  { input: "Hello Fleurissant, I'd like 50 Dutch roses", expectedThreat: false }
];

console.log('🛡️  Running SQLGuardJS Security Verification Suite...\n');

let passed = 0;
let failed = 0;

testCases.forEach((tc, i) => {
  const result = detector.detect(tc.input);
  const isThreat = result.label !== 'benign';
  const success = isThreat === tc.expectedThreat;

  if (success) {
    passed++;
    console.log(`✅ Test ${i + 1}: PASS [${isThreat ? 'BLOCKED' : 'ALLOWED'}] -> "${tc.input}"`);
  } else {
    failed++;
    console.log(`❌ Test ${i + 1}: FAIL (Expected ${tc.expectedThreat ? 'Threat' : 'Benign'}, got ${result.label}) -> "${tc.input}"`);
  }
});

console.log(`\nResults: ${passed} passed, ${failed} failed out of ${testCases.length} tests.`);
if (failed > 0) {
  process.exit(1);
} else {
  console.log('🛡️  All security protection checks PASSED with 0 false positives!\n');
}
