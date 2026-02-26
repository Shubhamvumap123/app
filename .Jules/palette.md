## 2026-02-26 - [ToggleGroup for Time Selection]
**Learning:** Using `ToggleGroup` for selection interfaces (like time slots) instead of generic button grids provides built-in accessibility (keyboard navigation, semantic roles) and clearer state management.
**Action:** Default to `ToggleGroup` for single-choice grids and ensure descriptive `aria-label`s are added to each item for screen readers.
