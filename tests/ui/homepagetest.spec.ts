import { test, expect } from '@playwright/test';
import { DemoqaHome } from '../../pageobjects/demoqahome';
import { DemoqaWebtable } from '../../pageobjects/demoqaWebtable';


test.use({
    viewport: { width: 1580, height: 1520 },
})
test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/");
})

test('@smoke fill the form', async ({ page }) => {
    const demoqaHome = new DemoqaHome(page);
    await demoqaHome.clickOnElements();
    await demoqaHome.fillForm("John Doe", "john.doe@example.com", "123 Main St", "456 Oak Ave");

    await expect(page.locator("//p[@id='name']")).toContainText("John Doe");
    await expect(page.locator("//p[@id='email']")).toContainText("john.doe@example.com");
    await expect(page.locator("//p[@id='currentAddress']")).toContainText("123 Main St");
    await expect(page.locator("//p[@id='permanentAddress']")).toContainText("456 Oak Ave");
    await demoqaHome.clickOnRadioButton();
    expect(page.locator("//p[@class='mt-3']")).toContainText("You have selected Yes");
})

test('@regression verify webtable', async ({ page }) => {
    const demoObj = new DemoqaWebtable(page)
    await demoObj.navigateToWebTable();
    await demoObj.fillForm("John", "Doe", "john.doe@example.com", "30", "50000", "IT");

    await expect(page.locator("(//tr//td[1])[4]")).toContainText("John");
})

test('@regression verify upload and download', async ({ page }) => {
    const demoqaHome = new DemoqaHome(page);
    await demoqaHome.clickOnUploadAndDownload();
    await expect(page.locator("#uploadedFilePath")).toContainText("radhe.jpg");
})