## 2025-01-20 - [Security Headers Added]
**Vulnerability:** Missing security headers allowed potential clickjacking, MIME sniffing, and insecure communication.
**Learning:** Next.js allows configuring these headers via `next.config.mjs`, providing a simple, declarative way to enforce security policies globally.
**Prevention:** Always verify security headers are set in `next.config.mjs` for all production Next.js applications.
