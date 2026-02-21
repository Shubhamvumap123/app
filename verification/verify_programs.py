import sys
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            print("Navigating to http://localhost:3000...")
            page.goto("http://localhost:3000")

            # Wait for the heading "Our Programs"
            heading = page.get_by_role("heading", name="Our Programs")
            print("Waiting for 'Our Programs' heading...")
            expect(heading).to_be_visible()

            # Scroll to it
            heading.scroll_into_view_if_needed()

            # Take a screenshot of the visible area
            print("Taking screenshot...")
            page.screenshot(path="verification/programs_section.png")
            print("Screenshot saved to verification/programs_section.png")

        except Exception as e:
            print(f"Error: {e}")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    run()
