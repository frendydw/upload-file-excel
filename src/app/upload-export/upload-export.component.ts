import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-export',
  templateUrl: './upload-export.component.html',
  styleUrls: ['./upload-export.component.scss']
})
export class UploadExportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.readExcelFile();
  }
  title = 'upload-file-excel';
  filename: string;
  data: any;
  loading = false;

  readExcelFile() {
    this.loading = true;
    const start = performance.now();
    const excelPath = '../../assets/excels/file_example_XLSX_50.xlsx'
    /* wire up file reader */
    const reader: XMLHttpRequest = new XMLHttpRequest();
    reader.open('GET', excelPath, true);
    reader.responseType = 'arraybuffer';
    reader.onload = (e: any) => {
      const arraybuffer = reader.response;

      /* convert data to binary string */
      const data = new Uint8Array(arraybuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
        //  console.log("Data"+data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, { type: 'binary' });
      const first_sheet_name = workbook.SheetNames[0];
      /* Get worksheet */
      const worksheet = workbook.Sheets[first_sheet_name];
      const json: any[] = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1, raw: true });
      const header = json[0];
      const dataExcel = json.slice(1);

      this.data = dataExcel.map(value => {
        const obj = {};
        for (let i = 0; i < header.length; i++) {
          const k = header[i];
          obj[k] = value[i];
        }
        return <any>obj;
      });
      this.loading = false;
      console.log(this.data);
    };
    reader.send();
  }

  getHeaders() {
    let headers: string[] = [];
    if (this.data) {
      this.data.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }

  fileName = 'ExcelSheet.xlsx';

  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
}
