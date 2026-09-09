# SQLGuardJS Reference Manual

## Overview
SQLGuardJS (developed by Chiranth Janardhan Moger) is an in-process security verification layer and detector for Node.js, Express, and Next.js applications.

Repository: https://github.com/Chiranth-Janardhan-moger/sqlguardjs

## Detection Vectors
1. **SQL Injection (SQLi)**
   - Boolean tautologies: `1=1`, `'a'='a'`, `TRUE`
   - Comment breakouts: `--`, `/* ... */`, `#`
   - Union queries: `UNION SELECT ...`
   - Stacked statements: `; DROP TABLE ...`, `; INSERT ...`
   - Metadata queries: `information_schema`, `sqlite_master`, `sys.tables`, `pg_catalog`

2. **Cross-Site Scripting (XSS)**
   - HTML injection: `<script>`, `<iframe>`, `<object>`, `<embed>`
   - Event handlers: `onerror=`, `onload=`, `onclick=`, `onmouseover=`
   - Pseudo-protocols: `javascript:`, `vbscript:`, `data:text/html`
   - SVG-based vectors: `<svg onload=...>`

3. **NoSQL Injection (NoSQLi)**
   - Operator injection: `$where`, `$regex`, `$gt`, `$ne` in request bodies and queries.

## Integration in Next.js
- `src/lib/security/sqlguard.ts`: TypeScript adapter providing `scanString`, `scanPayload`, `scanSearchParams`, and `assertSafe`.
- `src/middleware.ts`: Next.js request middleware intercepting malicious URL search parameters at the edge before hitting pages.
- Helper script: `node .agents/skills/sqlguard/scripts/scan-payload.js "<payload>"`
- Test suite: `node .agents/skills/sqlguard/scripts/test-guard.js`
