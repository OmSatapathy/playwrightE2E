import{test,expect} from '@playwright/test'
import { RegisterPage } from '../../pageobjects/demowebsite/Registertaion';

test("Register and verify user", async({page})=>{

    await page.goto("https://demo.automationtesting.in/Register.html")
     const demoobj = new RegisterPage(page);
    await demoobj.verifyRegister()
    await demoobj.verifyDropdownforRegistation()
})