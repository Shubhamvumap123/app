## 2024-05-24 - [CSS Injection via dangerouslySetInnerHTML]
**Vulnerability:** Found unescaped user-controlled values (CSS variables for charts) injected directly into `<style>` tags via `dangerouslySetInnerHTML`.
**Learning:** Even though the intention is simply to set a CSS color like `--color-foo: red;`, an attacker could provide a value like `red; } </style><script>alert('XSS')</script>`, breaking out of the style block and gaining Cross-Site Scripting (XSS).
**Prevention:** Always sanitize injected CSS values. Specifically, strip characters that can be used to escape CSS contexts or close HTML tags (e.g., `['";{}<>]`) before using `dangerouslySetInnerHTML`.
