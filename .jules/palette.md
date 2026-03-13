## 2024-05-15 - [Aria labels on abstract icon buttons]
**Learning:** Found multiple instances of icon-only buttons lacking `aria-label` attributes (e.g. video play button overlay in `About.tsx`). These are inaccessible to screen readers.
**Action:** When inspecting components that use custom SVGs or icons as the primary content of a button, always ensure an `aria-label` is present to describe the action.

## 2024-05-15 - [Form labels]
**Learning:** Some inputs like the newsletter subscription in `Footer.tsx` rely solely on placeholders, missing explicit associated labels or `aria-label`. This degrades the experience for assistive technology users.
**Action:** Always verify inputs have an associated label or, for inline forms where space is constrained, an `aria-label`.
