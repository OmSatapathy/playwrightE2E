import{test, expect} from '@playwright/test'
import { HomepageMMT } from '../../pageobjects/makemytrip/homepage'

test("verify homepage", async({page})=>{

    await page.goto("https://www.makemytrip.com/")
    const obj = new HomepageMMT(page);
    await obj.verifyHeaderList();

    await obj.bookingFlight()
    
})