## 2024-05-14 - Time Slot Selection Accessibility
**Learning:** Time slot buttons using a custom "selected" state without semantic ARIA attributes (like `aria-pressed`) create a poor experience for screen reader users, who will not hear which time slot is currently selected in booking modals.
**Action:** When creating custom toggle buttons or selectable grids (like time slots), always include `aria-pressed={isSelected}` so screen readers announce the selected state.
