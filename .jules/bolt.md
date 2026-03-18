## 2024-05-24 - Initial Bolt Journal
**Learning:** Initializing journal for tracking critical learnings.
**Action:** Always document codebase-specific performance patterns here.

## 2024-05-24 - Presentational Component Optimization
**Learning:** Purely presentational components (e.g., Hero, Programs, Coaches, Quote) should not have the `"use client"` directive to ensure they are rendered as Server Components, which significantly reduces the client-side JavaScript bundle size. Additionally, static data arrays defined inside the render function of these components should be hoisted to the module scope to prevent unnecessary garbage collection cycles upon re-renders.
**Action:** When creating or reviewing presentational components, verify the absence of `"use client"` if state or effects are not used, and hoist any static configuration or data arrays outside of the component body.
