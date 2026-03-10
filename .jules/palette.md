## 2024-03-10 - Direct alert() in Footer
**Learning:** The Newsletter signup in Footer.tsx uses a raw browser `alert("Subscribed!")` instead of the project's toast notification system (sonner), which breaks UX consistency.
**Action:** Replaced `alert()` with `toast.success()` and added a loading state to make the experience feel more robust and professional.
