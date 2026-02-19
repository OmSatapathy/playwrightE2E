import{Page,Locator} from '@playwright/test';
export class DemoqaWebtable{

    readonly page: Page;
    readonly elements: Locator;
    readonly webtable: Locator;
    readonly addbtn: Locator;

    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly email: Locator ;
    readonly age: Locator;
    readonly salary: Locator;
    readonly department: Locator;
    readonly submit: Locator;   

    constructor(page: Page) {
        this.page = page;
        this.elements = page.locator("//h5[contains(text(),'Elements')]");
        this.webtable = page.locator("//span[contains(text(),'Web Tables')]")
        this.addbtn = page.locator("#addNewRecordButton");      
        this.firstname = page.locator("#firstName");
        this.lastname = page.locator("#lastName");
        this.email = page.locator("#userEmail");
        this.age = page.locator("#age");
        this.salary = page.locator("#salary");
        this.department = page.locator("#department");
        this.submit = page.locator("#submit");
    }

    async navigateToWebTable() {
        await this.elements.click();
        await this.webtable.click();
        await this.addbtn.click();

    }

    async fillForm(firstname: string, lastname: string, email: string, age: string, salary: string, department: string) {
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.email.fill(email);
        await this.age.fill(age);
        await this.salary.fill(salary);
        await this.department.fill(department);
        await this.submit.click();
    }   
    
}