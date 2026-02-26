## 2024-05-23 - [Implicit Security Configuration Gap]
**Vulnerability:** The `next.config.mjs` file lacked standard security headers (HSTS, X-Frame-Options, X-Content-Type-Options) despite memory suggesting they were enforced.
**Learning:** Default Next.js configurations do not include these headers; explicit configuration is required. Assumptions about security defaults must be verified against actual configuration files.
**Prevention:** Enforce a "secure by default" template for `next.config.mjs` in all new projects and perform regular automated scans of configuration files to detect drift.

## 2024-05-23 - [Potential XSS in Chart Component]
**Vulnerability:** The `ChartStyle` component in `components/ui/chart.tsx` uses `dangerouslySetInnerHTML` to inject CSS variables from a configuration object. If this configuration becomes user-controlled, it presents a significant XSS risk.
**Learning:** Utility components that dynamically generate styles can inadvertently introduce XSS vectors if inputs are not sanitized.
**Prevention:** Sanitize keys and values in style generation functions, or leverage React's `style` prop capabilities where possible to avoid `dangerouslySetInnerHTML`.
