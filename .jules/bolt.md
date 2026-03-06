## 2024-05-24 - Static Array Hoisting and Memoization
**Learning:** Re-declaring static arrays and objects inside React component scopes leads to unnecessary memory allocation and triggers garbage collection cycles on every render, especially noticeable in lists/galleries.
**Action:** Always hoist static data (like `IMAGES` or `CATEGORIES`) outside of the component. Use `useMemo` for any derived state (like filtering) based on props or state to avoid redundant recalculations.
