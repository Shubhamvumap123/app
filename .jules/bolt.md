## 2025-02-21 - Unnecessary Client Components
**Learning:** Many presentational components (e.g., `Programs`, `Coaches`) are marked with `"use client"` despite having no interactivity or state. This unnecessarily increases the client bundle size.
**Action:** Audit and convert these to Server Components by removing `"use client"` and hoisting static data.
