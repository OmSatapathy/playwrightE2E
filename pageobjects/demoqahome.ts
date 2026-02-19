import { Page, Locator, expect } from '@playwright/test';
import path from 'path';

export class DemoqaHome {

    readonly page: Page;
    readonly elements: Locator;
    readonly textbox: Locator;

    readonly fullname: Locator;
    readonly email: Locator;
    readonly currentaddress: Locator;
    readonly permententaddress: Locator;
    readonly submit: Locator;


    readonly radio: Locator;
    readonly yes: Locator;




    constructor(page: Page) {
        this.page = page;
        this.elements = page.locator("//h5[contains(text(),'Elements')]")
        this.textbox = page.locator("//span[contains(text(),'Text Box')]")
        this.fullname = page.locator("#userName");
        this.email = page.locator("#userEmail");
        this.currentaddress = page.locator("#currentAddress");
        this.permententaddress = page.locator("#permanentAddress");
        this.submit = page.locator("#submit");

        this.radio = page.locator("//span[contains(text(),'Radio Button')]");
        this.yes = page.locator("#yesRadio");
      
    }

    async clickOnElements() {
        await this.elements.click();
        await this.textbox.click();
    }

    async fillForm(fullname: string, email: string, currentaddress: string, permanentaddress: string) {
        await this.fullname.fill(fullname);
        await this.email.fill(email);
        await this.currentaddress.fill(currentaddress);
        await this.permententaddress.fill(permanentaddress);
        await this.submit.click();


    
    
    }

    async clickOnRadioButton() {
        await this.radio.click();
        await this.yes.click();
    }

    async clickOnUploadAndDownload() {
        await this.elements.click();
        await this.page.locator("//span[contains(text(),'Upload and Download')]").click();
        const filePath = path.resolve(__dirname, '../testdata/radhe.jpg');
        await this.page.locator("#uploadFile").setInputFiles(filePath);
    }   
}
