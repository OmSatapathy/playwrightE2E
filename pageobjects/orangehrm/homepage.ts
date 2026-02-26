import{Page,Locator} from '@playwright/test'

export class OrangehrmHome{
    readonly page:Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submit:Locator
    readonly dashboard: Locator;


    constructor(page:Page){
        this.page=page;
        this.username= page.locator('//input[@name="username"]');
        this.password = page.locator('//input[@name="password"]');
         this.submit = page.locator("//button[@type='submit']");

         this.dashboard= page.locator("//span[@class='oxd-topbar-header-breadcrumb']")
     

    }

    async verifylogin(){
        await this.username.fill("Admin")
        await this.password.fill("admin123")
        await this.submit.click();
    }
}