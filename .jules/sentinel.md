## 2025-02-18 - [Testing JS Validation with HTML5 attributes]
**Vulnerability:** HTML5 `required` attributes can mask insufficient JS validation in automated tests.
**Learning:** Browser-native validation intercepts form submission before JS handlers run, causing false positives or untestable JS logic in E2E tests.
**Prevention:** Use `document.querySelector('form').setAttribute('novalidate', 'true')` in Playwright tests to bypass browser validation and verify the underlying JS validation logic (e.g., Zod schemas).
