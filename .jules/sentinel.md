## 2025-02-12 - Missing Security Headers in Next.js
**Vulnerability:** Default Next.js configuration lacks critical security headers (HSTS, X-Frame-Options, X-Content-Type-Options).
**Learning:** Frameworks prioritize developer experience and compatibility over restrictive defaults; strict security headers are often "opt-in".
**Prevention:** Always audit `next.config.mjs` or `middleware.ts` for security headers during project setup.
