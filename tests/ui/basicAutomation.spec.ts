import { test, expect } from '@playwright/test'
import automation from '../../testdata/automation.json';
import { LearnAutomationHomepge } from '../../pageobjects/learnautomation/learautomationCourse'

test('validate and verify', async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.locator("//a[contains(text(),'New user? Signup')]").click()

    await page.waitForURL('https://freelance-learn-automation.vercel.app/signup')

    await page.waitForTimeout(4000)

    const checkboxes = await page.locator("//input[@type='checkbox']")



    for (let i = 0; i < await checkboxes.count(); i++) {

        await checkboxes.nth(i).check()
        if (await checkboxes.nth(i).isChecked) {
            console.log("all checked")
        }

    }

    // await page.locator("//option[contains(text(),'Select State')]").click()

    await page.locator("select#state").selectOption({ label: 'Arunachal Pradesh' })
    await page.waitForTimeout(2000)
    await page.locator("select#state").selectOption({ index: 16 })
    await page.waitForTimeout(2000)
    await page.locator("select#state").selectOption({ value: "Puducherry" })
    await page.waitForTimeout(2000)


    await page.selectOption('select#hobbies', { label: "Reading" })
    await page.waitForTimeout(2000)
    await page.selectOption('select#hobbies', { index: 2 })


})


test("data driven test with json file", async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForLoadState('domcontentloaded')

    const obj = new LearnAutomationHomepge(page)
    for (const user of automation) {
        await obj.doLogin(user);
        await page.waitForTimeout(2000)
    }

})