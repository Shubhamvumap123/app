from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Go to the home page
            page.goto("http://localhost:3000")

            # Wait for the contact section to be visible
            # The contact section has "Get in Touch" text
            page.wait_for_selector("text=Get in Touch")

            # Scroll to the contact section
            contact_section = page.locator("text=Get in Touch")
            contact_section.scroll_into_view_if_needed()

            # Check if the form elements are present
            # We look for "Send us a Message" title in the form card
            page.wait_for_selector("text=Send us a Message")

            # Check for input fields
            page.wait_for_selector("input#name")
            page.wait_for_selector("input#email")

            # Fill the form to test interactivity (basic)
            page.fill("input#name", "Test User")
            page.fill("input#email", "test@example.com")

            # Take a screenshot of the Contact section
            # We can select the section by class or text container
            # The section has class "bg-teal-900"

            # Let's take a full page screenshot to be safe, or just the viewport after scrolling
            page.screenshot(path="verification/contact_section.png")

            print("Verification successful: Contact section loaded and form is interactive.")

        except Exception as e:
            print(f"Verification failed: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
