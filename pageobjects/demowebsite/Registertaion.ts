import { Page, Locator } from '@playwright/test'
import registeruser from '../../testdata/registeruser.json'
import path from 'path';

export class RegisterPage {

    private page: Page;
    private firstname: Locator;
    private lastname: Locator;
    private address: Locator;
    private email: Locator;
    private phone: Locator;
    private gender: Locator;
    private hobbies: Locator;
    private language: Locator;
    private skill: Locator;
    private Country: Locator;
    private dob: Locator;
    private Password: Locator;
    private confirmPwd: Locator;
    private fileImage: Locator;
    private submitBTN: Locator


    constructor(page: Page) {
        this.page = page;
        this.firstname = page.getByPlaceholder("First Name")
        this.lastname = page.getByPlaceholder("Last Name")
        this.address = page.locator("//textarea[@ng-model='Adress']")
        this.email = page.locator("//input[@ng-model='EmailAdress']")
        this.phone = page.locator("//input[@ng-model='Phone']")
        this.gender = page.locator("//input[@value='FeMale']")
        this.hobbies = page.locator("#checkbox1")
        this.language = page.locator("#msdd")
        this.skill = page.locator("#Skills")
        this.Country = page.locator("#countries")
        this.dob = page.locator("#msdd")
        this.Password = page.locator("#firstpassword")
        this.confirmPwd = page.locator("#secondpassword")

        this.fileImage = page.locator("#imagesrc")
        this.submitBTN = page.locator("#submitbtn")
    }

    async verifyRegister() {
        await this.firstname.click()
        await this.firstname.fill(registeruser.firstname)
        await this.lastname.fill(registeruser.lastname)
        await this.address.fill(registeruser.address)
        await this.email.fill(registeruser.email)
        await this.phone.fill(registeruser.phone)
        await this.gender.click()
        await this.hobbies.click()
        await this.language.waitFor({ state: 'visible' })
    }


    async verifyDropdownforRegistation() {
        await this.skill.waitFor({ state: 'visible' })

        await this.page.locator("#Skills").selectOption({ "index": 3 })
        await this.page.waitForTimeout(2000)
        await this.page.locator("#Skills").selectOption({ "value": "Backup Management" })
        await this.page.waitForTimeout(2000)
        console.log(await this.skill.textContent())

        await this.Password.fill(registeruser.password)
        await this.Password.fill(registeruser.confirmPwd)

        const filePath = path.resolve(__dirname, '../testdata/radhe.jpg');
        await this.fileImage.setInputFiles(filePath)
        await this.page.waitForTimeout(2000)
        await this.submitBTN.click()

    }

}