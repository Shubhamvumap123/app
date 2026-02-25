## 2025-02-18 - [Missing Default Security Headers]
**Vulnerability:** Default Next.js configuration lacks essential security headers.
**Learning:** Next.js applications, while secure by default in many aspects, do not ship with proactive security headers like CSP or HSTS, leaving users vulnerable to clickjacking and XSS if not configured.
**Prevention:** Always verify and implement security headers in `next.config.mjs` during project setup.
