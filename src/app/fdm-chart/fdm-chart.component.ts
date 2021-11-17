import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-fdm-chart',
  templateUrl: './fdm-chart.component.html',
  styleUrls: ['./fdm-chart.component.scss']
})
export class FdmChartComponent implements OnInit {
  typeChart: any;
  types: Array<string>;
  loading: boolean;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  filename: string;
  data: any;

  constructor() {
    this.typeChart = "line";
    this.types = [ 'line', 'bar'];
    this.loading = false;
    this.readExcelFile();
  }

  ngOnInit(): void {
    console.log(this.typeChart);

    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 84, 34, 14]
        },
        {
          name: "My-series 2",
          data: [40, 11, 21, 41, 43, 99, 102, 78, 128, 54, 54, 4]
        }
      ],
      chart: {
        height: 350,
        type: this.typeChart
      },
      title: {
        text: "Angular Apex Chart"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep", "Oct", "Nov", "Dec"]
      }
    };
  }

  changeChartType(type) : void {
    this.typeChart = type;
    this.chartOptions.chart.type = this.typeChart;
    this.ngOnInit();
  }


  readExcelFile() : void {
    this.loading = true;
    const start = performance.now();
    const excelPath = '../../assets/excels/sales_report.xlsx'
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
      console.log(header);
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

  getHeaders() : Array<any> {
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
}
