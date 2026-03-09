## 2024-05-18 - XSS via CSS Injection in Shadcn/ui Chart Component
**Vulnerability:** A cross-site scripting (XSS) vulnerability existed in `components/ui/chart.tsx` where user-controlled chart colors were injected directly into a `<style>` block via `dangerouslySetInnerHTML`.
**Learning:** `dangerouslySetInnerHTML` inside `<style>` tags can lead to CSS context escapes. Even if the input is meant to be a simple color string, an attacker can inject closing tags and malicious scripts (e.g., `</style><script>alert(1)</script>`) if the value is not properly sanitized.
**Prevention:** Always sanitize dynamic values injected via `dangerouslySetInnerHTML`, especially in CSS contexts. For colors, strip risky characters (like `['";{}<>]`) using regex before rendering them into the CSS string.
