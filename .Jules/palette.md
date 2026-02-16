## 2024-05-22 - Consistent Form Labeling
**Learning:** The app uses `shadcn/ui` components but some legacy/custom forms still use raw HTML elements (e.g., `<label>` in `Contact.tsx`). The `Label` component should be preferred for consistency and accessibility features.
**Action:** When encountering forms, check if they use `Label` component. If not, refactor to use it and ensure required fields are visually indicated.
