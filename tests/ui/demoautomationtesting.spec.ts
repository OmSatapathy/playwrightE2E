import { test, expect, Browser } from '@playwright/test'
import { RegisterPage } from '../../pageobjects/demowebsite/Registertaion';

test.use({
    viewport: { width: 1800, height: 1200 }
})

test.beforeEach(async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
})
test("Register and verify user", async ({ page }) => {

    await page.goto("https://demo.automationtesting.in/Register.html")
    const demoobj = new RegisterPage(page);
    await demoobj.verifyRegister()
    await demoobj.verifyDropdownforRegistation()
})

test("verify alert and window", async ({ page }) => {

    await page.locator("//a[contains(text(),'SwitchTo')]").hover()
    await page.locator("//a[contains(text(),'Alerts')]").click()
    expect(page.url()).toEqual("https://demo.automationtesting.in/Alerts.html")

    await page.locator("//a[contains(text(),'Alert with Textbox ')]").click()

    page.on("dialog", async (d) => {
        expect(d.message()).toContain('Please enter your name');
        await d.accept('Playwright User')

    })

    await page.locator("//button[@class='btn btn-info']").click()

})

test("handle windows and verify", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://demo.automationtesting.in/Register.html")
    await page.locator("//a[contains(text(),'SwitchTo')]").hover()
    await page.locator("//a[contains(text(),'Windows')]").click()

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("(//button[contains(text(),'click')])[1]").click()
    ])

    await newPage.waitForLoadState()
    const title = await newPage.title();
    expect(title).toContain("Selenium");

    await newPage.close()

    await page.locator("(//a[contains(text(),'Open New Seperate Windows')])[1]").click()

})

test("selenium website windowhandle", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()
  await page.goto("https://www.selenium.dev/");

    // First new tab (LinkedIn)
    const [linkedInPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//i[@class='fab fa-linkedin-in']").click()
    ]);

    await linkedInPage.waitForLoadState();
    console.log("LinkedIn URL:", linkedInPage.url());

    // Second new tab (Twitter)
    const [twitterPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("//i[@class='fab fa-twitter']").click()
    ]);

    await twitterPage.waitForLoadState();
    console.log("Twitter URL:", twitterPage.url());

})

