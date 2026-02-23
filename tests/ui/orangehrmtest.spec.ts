import { test, expect, Browser, chromium } from '@playwright/test'
import { OrangehrmHome } from "../../pageobjects/orangehrm/homepage.ts"
import{Adminpage} from "../../pageobjects/orangehrm/adminpage.ts"

test.use({
    viewport: { width: 1500, height: 1400 }
})


test("verify homepage login", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForLoadState("load")
    const homeobj = new OrangehrmHome(page);
    await homeobj.verifylogin()

    const value = await page.locator("//span[@class='oxd-topbar-header-breadcrumb']").textContent()
    expect(value).toContain('Dashboard')

   const adminobj = new Adminpage(page);
   await adminobj.addRecord();
  // await adminobj.fetchRecord();
   

})
