import { test, expect } from '@playwright/test'

test("verify homepage", async ({ page }) => {
    await page.goto("https://tracextech.com/")
    await page.waitForLoadState("load")
    await page.locator("(//a[contains(text(),'Solutions')])[3]").click()

    const links = await page.locator("//a[@class='elementor-sub-item']")

    const count = await links.count()

    for (let i = 0; i < count; i++) {
        const value = await links.nth(i).textContent()
        if (value?.trim() === 'Sustainability') {
            page.getByRole('link', { name: 'Sustainability' }).click()
            await page.waitForTimeout(4000)
            break;
        }

    }

    expect(page.url()).toStrictEqual("https://tracextech.com/supply-chain-sustainability-solution/")

})

test("verify industries",async({page})=>{

   await page.goto("https://tracextech.com/")
    await page.waitForLoadState("domcontentloaded")
    await page.getByRole("link",{ name:'Industries'}).click()
    await page.waitForTimeout(4000)

    await page.getByRole('link',{name:'Processor'}).click()

    expect(page.url()).toStrictEqual("https://tracextech.com/industry/processor/")

})

test("verify footer links",async({page})=>{

    await page.goto("https://tracextech.com/")
    await page.waitForLoadState("domcontentloaded")

    const  value =await page.getByRole("link",{name:'Contact Us'})
    await value.scrollIntoViewIfNeeded()

    await page.getByRole("link",{name:'Contact Us'}).click()
    await page.waitForTimeout(4000)
})