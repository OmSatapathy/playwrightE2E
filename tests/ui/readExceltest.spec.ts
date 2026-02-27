import { test } from '@playwright/test';
import * as XLSX from 'xlsx';

test('Login using Excel data', async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.waitForLoadState('domcontentloaded')

    const workbook = XLSX.readFile('testdata/manualdata.xlsx');
    const sheet = workbook.Sheets['Sheet1'];
    const data = XLSX.utils.sheet_to_json(sheet);

    for (const user of data as any[]) {

        await page.getByPlaceholder("Enter Email").fill(user.username)
        await page.getByPlaceholder("Enter Password").fill(user.password)
        console.log(user.username, user.password);


    }
});