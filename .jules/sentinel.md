## 2026-03-16 - XSS Vulnerability in ChartStyle CSS Injection
**Vulnerability:** XSS risk via unescaped props (`id`, `key`, `color`) interpolated into `dangerouslySetInnerHTML` inside a `<style>` tag in `components/ui/chart.tsx`.
**Learning:** When injecting CSS configurations derived from props into a raw string, characters like quotes, semicolons, or angle brackets can break out of the CSS context or close the `<style>` tag prematurely, allowing malicious script execution.
**Prevention:** Always sanitize interpolated values by stripping or escaping characters (e.g., `.replace(/['";{}<>]/g, '')`) before injecting them into `dangerouslySetInnerHTML`.
