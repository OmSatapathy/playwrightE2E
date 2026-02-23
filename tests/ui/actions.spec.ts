import { test, expect, Browser } from '@playwright/test'


test("verify drag and drop", async ({ page }) => {
    await page.goto("https://demoqa.com/")
    await page.locator("//*[contains(text(),'Interactions')]").click()
    await page.locator("//span[contains(text(),'Droppable')]").click()
    const dragableItem =  page.locator("(//div[contains(text(),'Drag Me')])[1]")
    const dropedItem =  page.locator("//p[contains(text(),'Drop Here')]")

     await dragableItem.dragTo(dropedItem);

    // await expect(page.locator("(//p[contains(text(),'Dropped')])[1]")).toHaveText("Dropped!");


    await page.waitForTimeout(3000)
})