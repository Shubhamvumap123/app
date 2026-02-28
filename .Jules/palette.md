## 2026-02-28 - [Replace alerts with Toasts for better UX and perceived performance]
**Learning:** Direct calls to `alert()` block the UI thread and provide poor user experience. Replacing them with non-blocking toast notifications (e.g., via `sonner`) alongside async simulated delay provides better perceived performance and professional feel.
**Action:** Replaced `alert()` in `Footer.tsx` Newsletter form with `toast.success`, added loading state using `Loader2`, and implemented required accessibility properties (`aria-label`, `required`).
