import { test, expect, Browser, chromium } from '@playwright/test'


test.use({

    viewport: { width: 1600, height: 1400 }
})
test.beforeEach(async ({ page }) => {

    await page.goto("https://onereal.com/")
    await page.waitForLoadState("domcontentloaded")
})


test("verify homepage real", async ({ page }) => {
    const all_headers = await page.locator("//div[@class='rl-header__menu']//a").allTextContents()

    for (let i = 0; i < 5; i++) {
        if (all_headers[i] == '.') {
            all_headers.pop()
            console.log("element removed" + all_headers[i])
        } else {
            console.log(all_headers[i])
        }
    }

})

////ul[@class='rl-footer__menu']
//

test("verify bottom section", async ({ page }) => {
    const footer = await page.locator("//ul[@class='rl-footer__menu']").first()
    await footer.scrollIntoViewIfNeeded();

    const footer_headers = await page.locator("//div[@class='rl-footer__col-title h5']").allTextContents()

    for (const header of footer_headers) {
        console.log(header);
    }
    console.log("*************")

    const all_footesname = await page.locator("//ul[@class='rl-footer__menu']//a").allTextContents()
    for (const footer of all_footesname) {
        console.log(footer)
    }

    const allfooter_link = await page.locator("//ul[@class='rl-footer__menu']//a").all()

    for (let i = 0; i < allfooter_link.length; i++) {
        const text = await allfooter_link[i].textContent();

        if (text?.trim() === 'Sell Your Home') {
            await allfooter_link[i].click();
            break; // stop once found
        }
    }


    console.log("title is:" + await page.title())

})