import { test, expect } from "@playwright/test"
import { CreateaccountPage } from "../../pageobjects/makemytrip/realHirepage"

test("verify account creation", async ({ page }) => {

    await page.goto("https://app.playonereal.com/agent-signup")
    await page.waitForLoadState("domcontentloaded")

    const createobj = new CreateaccountPage(page)
    await createobj.accountCreation()


    await page.waitForLoadState("domcontentloaded")
    await page.waitForTimeout(10000)

    expect(page.url()).toContain("/agent-onboarding")


})
