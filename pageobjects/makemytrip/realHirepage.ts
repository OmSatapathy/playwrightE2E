import { Page, Locator } from '@playwright/test'

export class CreateaccountPage {

    readonly page: Page | undefined;
    readonly first_name: Locator;
    readonly last_Name: Locator;
    readonly user_name: Locator;
    readonly email: Locator
    readonly password: Locator;
    readonly confirm_password:Locator;

    readonly agree_checkbox: Locator;
    readonly concent_checkbox:Locator;
    readonly create_button:Locator



    constructor(page: Page) {
        this.first_name = page.getByPlaceholder("Enter your first name")
        this.last_Name = page.getByPlaceholder("Enter your last name")
        this.user_name = page.getByPlaceholder("eg. johndoe9")
        this.email = page.getByPlaceholder("johndoe@example.com")
        this.password = page.locator("//input[@type='password']").first()
        this.confirm_password = page.getByPlaceholder("Confirm password")

        this.agree_checkbox= page.getByTestId("consentedToTerms")
        this.concent_checkbox = page.getByTestId("consentedToCallMessage")

        this.create_button= page.locator("//span[contains(text(),'Create Account')]")

    }

    async accountCreation(){

        await this.first_name.fill("Om")
        await this.last_Name.fill("Satapathy")
        await this.user_name.fill("omsatapthy95515")
        await this.email.fill("omops800259@gmail.com")
        await this.password.fill("Omprakash@56789")
        await this.confirm_password.fill("Omprakash@56789")
        await this.agree_checkbox.click()
        await this.concent_checkbox.click()

        await this.create_button.click()
    }
}