import { Page, Locator } from '@playwright/test'
import automation from "../../testdata/automation.json"

export class LearnAutomationHomepge {

    readonly page: Page | undefined;
    readonly header: Locator;
    readonly titles: Locator;

    readonly facrbookpage: Locator;

    readonly selectMonth: Locator;


    readonly emailfield: Locator;
    readonly passwodfield: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator("//ul[@id='menu-mukesh1']//a")
        this.titles = page.locator("#entry-title")
        this.facrbookpage = page.locator(".facebook")

        this.selectMonth = page.locator("//select[@id='archives-dropdown-3']")

        this.emailfield = page.getByPlaceholder("Enter Email")
        this.passwodfield = page.getByPlaceholder("Enter Password")


    }

    async verifyHomepge() {

        const allItem = this.header

        const count = await allItem.count()

        for (let i = 0; i < count; i++) {

            const values = await allItem.nth(i).textContent()
            console.log(values)

            if (values?.trim() === 'Automation Tools and Different Tools') {

                await allItem.nth(i).hover()
                await this.page?.locator("//a[normalize-space(.) = 'testRigor']").click()
                break;

            }

        }

        const currentURL = await this.page?.url();
        console.log(currentURL)
    }


    async selectDropdown() {

        await this.page?.locator("//select[@id='archives-dropdown-3']").click()
        await this.selectMonth.scrollIntoViewIfNeeded()

        await this.selectMonth.selectOption({ 'value': 'https://learn-automation.com/2016/11/' })
        const value = await this.selectMonth.innerText()
        console.log(value)
    }

    async doLogin(user: { username: string; pwd: string }) {
        await this.emailfield.fill(user.username);
        await this.passwodfield.fill(user.pwd);
    }
}