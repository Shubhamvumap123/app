from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Homepage
    print("Navigating to homepage...")
    page.goto("http://localhost:3000")
    page.wait_for_selector("text=Southern Slam Academy")
    page.screenshot(path="verification_home.png")
    print("Homepage screenshot taken.")

    # Check header links
    print("Checking header links...")
    links = ["About", "Programs", "Facilities", "Coaches", "Events", "Gallery", "Blog"]
    for link in links:
        if not page.is_visible(f"text={link}"):
            print(f"Error: Link {link} not visible")
        else:
            print(f"Link {link} visible")

    # Navigate to About
    print("Navigating to About page...")
    page.click("text=About")
    page.wait_for_url("http://localhost:3000/about")
    page.wait_for_selector("text=About Southern Slam Academy")

    # Check for video placeholder (text "Training Highlights")
    if page.is_visible("text=Training Highlights"):
        print("Video placeholder found.")
    else:
        print("Error: Video placeholder not found.")

    page.screenshot(path="verification_about.png")
    print("About page screenshot taken.")

    # Navigate to Programs
    print("Navigating to Programs page...")
    page.goto("http://localhost:3000/programs")
    page.wait_for_selector("text=Our Programs")
    if page.is_visible("text=Junior Academy"):
        print("Programs content found.")
    page.screenshot(path="verification_programs.png")
    print("Programs page screenshot taken.")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
