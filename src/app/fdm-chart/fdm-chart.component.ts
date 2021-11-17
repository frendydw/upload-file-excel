import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.typeChart = "line";
    this.types = [ 'line', 'bar'];
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
        text: "My First Angular Chart"
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
}
