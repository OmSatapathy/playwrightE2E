import{test,expect} from '@playwright/test';
import { AsyncLocalStorage } from 'node:async_hooks';


test.use({
    viewport: { width: 1580, height: 1520 },
})
test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/");
})


test('@smoke verify browser interactions', async ({ page }) => {
    await page.click("//h5[text()='Alerts, Frame & Windows']");
    await page.click("//span[text()='Browser Windows']");   

    await page.click("//button[@id='tabButton']");
    await page.waitForTimeout(2000);
    const pages = page.context().pages();
    const newPage = pages[1];
    await newPage.waitForLoadState();
    await expect(newPage.locator("//h1[@id='sampleHeading']")).toContainText("This is a sample page");

    await page.click("//button[@id='windowButton']");
    await page.waitForTimeout(2000);
    const allPages = page.context().pages();
    const newWindow = allPages[2];
    await newWindow.waitForLoadState();
    await expect(newWindow.locator("//h1[@id='sampleHeading']")).toContainText("This is a sample page");

  
})


test('@regression verify alerts', async ({ page }) => {
    await page.click("//h5[text()='Alerts, Frame & Windows']");
    await page.click("//span[text()='Alerts']");

    // Handle simple alert
    page.once("dialog", async (dialog) => {
        console.log(`Alert message: ${dialog.message()}`);
        await dialog.accept();
    });
    await page.click("#alertButton");

    // Handle prompt alert
    page.once("dialog", async (dialog) => {
        console.log(`Prompt message: ${dialog.message()}`);
        await dialog.accept("John Doe");
    });
    await page.click("#promtButton");

    page.on("dialog",async(dialog)=>{
        console.log(`Confirm message: ${dialog.message()}`);
        await dialog.dismiss();
    })
    await page.click("#confirmButton");
});








