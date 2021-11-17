import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  title = 'upload-file-excel';
  filename: string;
  data: any;

  loading = false;
 
  onFileChange(event: any) : void {
    this.loading = true;
    const start = performance.now();
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(event.target);
    this.filename = event.target.files[0].name;
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
    };
  }

  getHeaders() : Array<any> {
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

  goToPage(pageName:string) : void{
    this.router.navigate([`${pageName}`]);
  }
}
