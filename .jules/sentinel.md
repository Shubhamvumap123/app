
## 2025-03-08 - CSS Injection in dynamic chart styles
**Vulnerability:** Unsanitized CSS variables in `ChartStyle` component injected via `dangerouslySetInnerHTML`. User-provided color configurations were directly interpolated into a `<style>` block.
**Learning:** React's standard protection against XSS does not apply to `dangerouslySetInnerHTML`. Even standard utility components from popular libraries (like shadcn/ui charts) can introduce vulnerabilities if they construct CSS dynamically from configuration objects without sanitization.
**Prevention:** Always sanitize dynamic values interpolated into `<style>` tags via `dangerouslySetInnerHTML`. Stripping risky characters like `/['";{}<>]/g` from CSS color variables is a safe and effective approach.
