import { Page, Locator } from '@playwright/test'

export class LearnAutomationHomepge {

    readonly page: Page | undefined;
    readonly header: Locator;
    readonly titles: Locator;

    readonly facrbookpage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.header = page.locator("//ul[@id='menu-mukesh1']//a")
        this.titles = page.locator("#entry-title")
        this.facrbookpage = page.locator(".facebook")
    }

    async verifyHomepge() {

        const allItem = this.header

        const count = await allItem.count()

        for (let i = 0; i < count; i++) {

            const values = await allItem.nth(i).textContent()
            console.log(values)

            if(values?.trim()==='Automation Tools and Different Tools'){

                await allItem.nth(i).hover()
                await this.page?.locator("//a[normalize-space(.) = 'testRigor']").click()
                break;

            }

        }

        const currentURL = await this.page?.url();
        console.log(currentURL)
    }
}