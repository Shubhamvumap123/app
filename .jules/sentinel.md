## 2024-05-22 - Default Security Headers Gap
**Vulnerability:** Application deployed with default Next.js configuration lacked explicit HTTP security headers (HSTS, X-Frame-Options, Permissions-Policy).
**Learning:** Even when performance settings like `unoptimized: true` are manually configured, security settings are often overlooked. Framework defaults prioritize compatibility over strict security.
**Prevention:** Include a security header checklist in the project setup template or pre-commit hooks.
