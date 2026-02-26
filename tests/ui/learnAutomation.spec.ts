import{test,expect } from '@playwright/test'
import{LearnAutomationHomepge} from '../../pageobjects/learnautomation/learautomationCourse'

test.use({
   
    viewport:{width:1600, height: 1500}
})

test("verifying homepage of learn automation", async({page})=>{

    await page.goto("https://learn-automation.com/")

    const obj = new LearnAutomationHomepge(page);
    await obj.verifyHomepge()

})