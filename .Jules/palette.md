## 2025-02-17 - Button Grids vs. Toggle Groups
**Learning:** Using `<div>` grids of `<Button>` components for single-choice selection (like time slots) fails to convey the relationship between options to assistive technology. Screen readers treat them as independent actions rather than a choice from a set.
**Action:** Always refactor such patterns to use `<ToggleGroup type="single">` or `<RadioGroup>`. This provides correct ARIA roles (`radio`), keyboard navigation (arrow keys), and selection state management out of the box.

## 2025-02-17 - Simulated Loading States for Instant Actions
**Learning:** Instantaneous actions (like simulated booking) can feel "broken" or unverified to users if they happen too fast, especially for critical transactions.
**Action:** Add a small artificial delay (e.g., 500-1000ms) with a loading spinner to critical actions. This improves perceived value and gives users confidence that the system is processing their request.
