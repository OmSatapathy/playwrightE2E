import { test, expect } from '@playwright/test'

test("google search", async ({ page }) => {

    await page.goto("https://www.google.com/")
    await page.waitForLoadState("load")

    await page.locator("//textarea[@name='q']").type("automation", { delay: 2 })

    const suggestion = await page.locator("//ul[@role='listbox']//li")
    await page.waitForTimeout(4000)
    const count = await suggestion.count()

    for (let i = 0; i < count; i++) {

        console.log(await suggestion.nth(i).innerText())
        console.log(await suggestion.nth(i).textContent())
    }
})

test("verify keyboard event", async({page})=>{
      await page.goto("https://www.google.com/")
      await page.waitForLoadState("load")

         await page.locator("//span[contains(text(),'Not interested')]").click()

      await page.locator("//textarea[@name='q']").type("naveen",{delay:3})

     

      await page.waitForTimeout(4000)
    const iteams =   await page.locator("//ul[@role='listbox']//li")

    const count = await iteams.count()
    
    for(let i =0; i<count; i++){

       const value = await iteams.nth(i).innerText()
       console.log(value)

       if(value?.trim() === "Naveen Jindal"){
         await iteams.nth(i).click()
         break;
       }
    }

    await page.waitForLoadState("domcontentloaded")

   const name = await page.locator("//div[@role='heading' and @data-attrid='title']").innerText()

    expect(name).toContain("Naveen Jindal")
})

//
test("verify location", async({page})=>{

 await page.goto("https://www.google.com/")
      await page.waitForLoadState("load")

      await page.locator("//span[contains(text(),'Not interested')]").click()
      await page.waitForTimeout(4000)


})