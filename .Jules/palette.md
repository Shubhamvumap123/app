## 2025-03-02 - [Professional Feedback vs Blocks]
**Learning:** Using `alert()` for form submissions blocks the main thread and feels jarring to users.
**Action:** Replace `alert()` with non-blocking toast notifications (e.g., `sonner`) and implement simulated async delays with loading states for instant actions to improve perceived reliability.
