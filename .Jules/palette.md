## 2026-02-12 - Selection Grid Accessibility
**Learning:** Using `Button` grids for single-select options (like time slots) lacks semantic meaning for screen readers. `ToggleGroup` provides built-in keyboard navigation (roving focus) and proper selection state (`aria-pressed` or equivalent).
**Action:** Replace custom button selection grids with `ToggleGroup` (single or multiple) to improve accessibility and maintain consistent interaction patterns.
