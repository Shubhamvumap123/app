# Palette's Journal

## 2026-02-18 - Visual Indicators for Required Fields
**Learning:** The application uses standard HTML `<label>` elements in `Contact` component, missing visual indicators for required fields, which is a common accessibility gap.
**Action:** Implemented a standard pattern: `<label>Text <span className="text-red-500" aria-hidden="true">*</span></label>` combined with `aria-required="true"` on inputs. This should be the standard for all forms in this project.
