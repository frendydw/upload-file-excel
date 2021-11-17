import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-data-master',
  templateUrl: './upload-data-master.component.html',
  styleUrls: ['./upload-data-master.component.scss']
})
export class UploadDataMasterComponent implements OnInit {
  downloadUrl: string;
  dataMasterTypes: Array<string>;
  filename: string;
  data: any;
  dataType: string;
  isLargeFile: boolean;
  headerTemplate: string;

  brandTemplateUrl: string;
  groupTemplateUrl: string;
  kategoriUsahaTemplateUrl: string;
  kodeOfficeTemplateUrl: string;

  loading = false;
  isTemplate: boolean;

  constructor() {
    this.dataMasterTypes = ['Brand', 'Group', 'Kategori Usaha', 'Kode Officer'];
    this.brandTemplateUrl = './../../assets/excels/templates/brand_template.xlsx';
    this.groupTemplateUrl = './../../assets/excels/templates/group_template.xlsx';
    this.kategoriUsahaTemplateUrl = './../../assets/excels/templates/kategori_usaha_template.xlsx';
    this.kodeOfficeTemplateUrl = './../../assets/excels/templates/kode_officer_template.xlsx';

  }

  ngOnInit(): void {
    this.loading = false;
    this.isLargeFile = false;
    this.isTemplate = false;
  }

 
  onFileChange(event: any): void {
    this.loading = true;
    const start = performance.now();
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    this.filename = event.target.files[0].name;
    const fileSize = target.files[0].size;

    this.isLargeFile = fileSize > 1000000 ?  true : false;

    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.readAsBinaryString(target.files[0]);
    reader.onload = (e: any) => {
      /* create workbook */
      const binarystr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

      /* selected the first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = XLSX.utils.sheet_to_json(ws); // to get 2d array pass 2nd parameter as object {header: 1}
      console.log(this.data); // Data will be logged in array format containing objects
      const end = performance.now();
      console.log(end - start);
      this.loading = false;

      let headers: string[] = [];
      if(this.data) {
      this.data.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    this.getTemplateHeaders(headers);
    };
  }

  getHeaders(): Array<any> {
    let headers: string[] = [];
    if(this.data) {
      this.data.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if(!headers.find((header) => header == key)){
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }

  downloadTemplate() {
    if (this.dataType == 'Brand') {
      return this.brandTemplateUrl;
    } else if (this.dataType == 'Group') {
      return this.groupTemplateUrl;
    } else if (this.dataType == 'Kategori Usaha') {
      return this.kategoriUsahaTemplateUrl;
    } else if (this.dataType == 'Kode Officer') {
      return this.kodeOfficeTemplateUrl;
    } 
  }

  getTemplateHeaders(headers) : void {
    this.loading = true;
    const start = performance.now();
    let excelPath = ''

    if (this.dataType == 'Brand') {
      excelPath = this.brandTemplateUrl;
    } else if (this.dataType == 'Group') {
      excelPath = this.groupTemplateUrl;
    } else if (this.dataType == 'Kategori Usaha') {
      excelPath = this.kategoriUsahaTemplateUrl;
    } else if (this.dataType == 'Kode Officer') {
      excelPath = this.kodeOfficeTemplateUrl;
    } 
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
      this.headerTemplate = json[0];

      this.isTemplate = true;
      for (var i = 0; i < headers.length; ++i) {
        if (headers[i] !== this.headerTemplate[i]) {
          this.isTemplate = false;
          break;
        } 
      }

      console.log(this.isTemplate);
      this.loading = false;
    };
    reader.send();
  }

}
