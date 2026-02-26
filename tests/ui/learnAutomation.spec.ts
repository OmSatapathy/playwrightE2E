import{test,expect } from '@playwright/test'
import{LearnAutomationHomepge} from '../../pageobjects/learnautomation/learautomationCourse'

test.use({
   
    viewport:{width:1600, height: 1500}
})

test.beforeEach("opening website", async({page})=>{
   await page.goto("https://learn-automation.com/")
   await page.waitForLoadState('load')
})

test("verifying homepage of learn automation", async({page})=>{


    const obj = new LearnAutomationHomepge(page);
    await obj.verifyHomepge()

})


test(" verify dropdowon from options", async({page})=>{

    const obj = new LearnAutomationHomepge(page)
    obj.selectDropdown()
      
})