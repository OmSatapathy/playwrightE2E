import { test, Browser, expect } from '@playwright/test'

test("verify social links", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://onereal.com/profile/aaron_therealtor")

    const [facebookPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("(//div[@class='flex space-x-5']//a)[1]").click()
    ])

    await facebookPage.url()
    console.log(await facebookPage.url())
    await facebookPage.waitForLoadState("domcontentloaded")
    const value = await facebookPage.locator("//span[contains(text(),'WhatsApp')]").isVisible()
    console.log(value)

   const[instapage] = await Promise.all([
        context.waitForEvent("page"),
         page.locator("(//div[@class='flex space-x-5']//a)[2]").click()

     ])

      console.log(await instapage.url())


})
