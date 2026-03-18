## 2025-02-17 - Required Form Fields Pattern
**Learning:** Found that required form fields in the app lack visual indicators (`*`) even when `required` is present on the input. This is confusing for users trying to figure out which fields are mandatory before submitting.
**Action:** Always ensure that when `required` is used on an input, the corresponding label includes a visual indicator (like a red asterisk with `aria-hidden="true"`) and the input has `aria-required="true"` to explicitly announce it to screen readers.
