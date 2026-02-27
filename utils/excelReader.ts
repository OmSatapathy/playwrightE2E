import * as XLSX from 'xlsx';
import{expect,Page} from '@playwright/test'

export class readExcel {
    readonly page:Page

    constructor(page:Page){
        this.page = page;
    }

    async readFiles() {
        const workbook = XLSX.readFile('../../testdata/manualdata.xlsx');
        const sheet = workbook.Sheets['Sheet1'];
        const data = XLSX.utils.sheet_to_json(sheet);

        console.log(data);
    }
}