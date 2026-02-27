## 2024-05-24 - [Scroll Handler Re-renders]
**Learning:** Attaching a scroll event listener in a React component (`Header.tsx`) without throttling or debouncing can cause excessive re-renders (potentially hundreds per second) during scrolling, leading to jank and main thread blocking, especially on lower-end devices.
**Action:** Always throttle or debounce scroll event listeners, or use `IntersectionObserver` when detecting scroll position relative to elements. For simple "scrolled past X" logic, a throttled handler is sufficient.
