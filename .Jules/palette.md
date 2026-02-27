## 2024-05-24 - [Newsletter Interaction Refinement]
**Learning:** Replaced `window.alert` with `sonner.toast` for newsletter subscription feedback. This aligns with modern UX practices, providing non-blocking, visually consistent feedback.  Adding a loading state with `Loader2` during the simulated async operation improves perceived performance and responsiveness.
**Action:** Always prefer `sonner.toast` over native alerts for user feedback. Implement loading states for all async interactions, even simulated ones, to guide user expectations.
