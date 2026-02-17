## 2024-05-24 - Server Components vs Client Wrappers
**Learning:** UI components like `Button` (wrapping Radix Slot) can be Server Components if they don't use hooks (`useState`, `useEffect`). This allows parent components (like `Hero`, `Programs`) to also be Server Components even if they use these UI primitives, significantly reducing the client bundle size.
**Action:** Always check if UI library components are truly Client Components before marking their consumers as `"use client"`.
