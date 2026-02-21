import { Page, Locator } from '@playwright/test'

export class HomepageMMT {


    readonly page: Page;
    readonly headers: Locator;
    readonly from_City: Locator;
    readonly to_City: Locator;
    readonly departure_date: Locator;
    readonly num_travellers: Locator;

    readonly num_adult: Locator;
    readonly num_clild: Locator;
    readonly travel_class: Locator;
    readonly apply_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headers = page.locator("//ul[@class='makeFlex font12 headerIconsGap']//li") //ul[@class='makeFlex font12 headerIconsGap']//li
        this.from_City = page.locator("#fromCity")
        this.to_City = page.locator("#toCity")
        this.departure_date = page.locator("#departure")
        this.num_travellers = page.locator("//input[@id='travellers']")

        this.num_adult = page.locator("//li[@data-cy='adults-2']")
        this.num_clild = page.locator("//li[@data-cy='children-1']")
        this.travel_class = page.locator("//ul[@class='guestCounter classSelect font12 darkText']//li")
        this.apply_button = page.locator("(//button[@type='button'])[1]")
    }


    async verifyHeaderList() {
        const allIteams = await this.headers.allTextContents();

        for (const single of allIteams) {
            console.log(single)
        }
    }

    async bookingFlight() {
        await this.from_City.click();
        await this.page.locator("//span[contains(text(),'Mauritius')]").click()
        await this.to_City.click();
        await this.page.getByPlaceholder("To").type("Bhubane")
        await this.page.locator("//span[contains(text(),'Bhubaneswar, India')]").click()
        await this.page.locator("(//div[@class='dateInnerCell'])[34]").click()
        await this.num_travellers.waitFor({ state: 'visible' });
        await this.num_travellers.click()
        await this.num_adult.click()

        await this.num_clild.click()
        const count = await this.travel_class.count();

        for (let i = 0; i < count; i++) {
            await this.travel_class.nth(2).click();
        }

        const alltype = await this.travel_class.allTextContents()
        alltype.forEach((element: string) => {
            if (element == 'First Class') {
              console.log("recoed found")
            }
        });
    }
}