import { Page, Locator } from '@playwright/test'

export class Adminpage {

    readonly page: Page;
    readonly adminPanel: Locator;
    readonly username: Locator;
    readonly userRole: Locator;
    readonly employeename: Locator;
    readonly status: Locator // (//div[contains(text(), '-- Select --')])[1]  oxd-input oxd-input--active

    readonly addButton: Locator
    readonly add_userrole: Locator; //.oxd-select-text-input
    readonly add_status: Locator;
    readonly add_empoyename: Locator;
    readonly add_username: Locator;
    readonly add_password: Locator;
    readonly add_confirmpwd: Locator;
    readonly save_btn: Locator

    constructor(page: Page) {
        this.page = page;
        this.adminPanel = page.locator("//span[normalize-space()='Admin']")
        this.username = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.employeename = page.getByPlaceholder("Type for hints...")
        this.userRole = page.locator("(//div[contains(text(), '-- Select --')])[1]")
        this.status = page.locator("(//div[contains(text(), '-- Select --')])[2]")

        this.addButton = page.locator("//button[@type='button' and @class='oxd-button oxd-button--medium oxd-button--secondary']")
        this.add_userrole = page.locator(".oxd-select-text-input").first()

        this.add_status = page.locator(".oxd-select-text-input").nth(1)
        this.add_empoyename = page.getByPlaceholder("Type for hints...")
        this.add_username = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.add_password = page.locator("(//input[@class='oxd-input oxd-input--active'])[3]")
        this.add_confirmpwd = page.locator("(//input[@class='oxd-input oxd-input--active'])[4]")
        this.save_btn = page.locator("//button[@type='submit']")

    }


    async addRecord() {
        await this.adminPanel.click()
        await this.addButton.click()
        await this.add_userrole.click()
        await this.page.locator("//span[contains(text(),'Admin')]").click()
        await this.add_status.click()
        await this.page.locator("//span[contains(text(),'Enabled')]").click()
        await this.add_empoyename.fill("samaypathk")
        await this.page.waitForTimeout(1000)
        await this.add_username.fill("samay55")
         await this.page.waitForTimeout(1000)
          await this.add_password.click()
        await this.add_password.fill("Samay552")
         await this.page.waitForTimeout(1000)
       //  await this.add_confirmpwd.click()
        //await this.add_confirmpwd.fill("Samay552")
        await this.save_btn.click()

    }


    async fetchRecord() {

        await this.adminPanel.click()
        await this.username.fill("dkshankar")
        await this.userRole.click()
        await this.page.locator("//span[contains(text(),'Admin')]").click()
        await this.employeename.fill("samay pathk")
        await this.status.click()
        await this.page.locator("//span[contains(text(),'Enabled')]").click()
    }
}