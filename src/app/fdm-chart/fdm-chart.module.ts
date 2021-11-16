import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbLayoutModule, NbCardModule, NbSpinnerModule, NbSelectModule, NbOptionModule } from '@nebular/theme';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FdmChartRouting } from './fdm-chart-routing.module';
import { FdmChartComponent } from './fdm-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    NbSelectModule,
    NbOptionModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    FormsModule,
    FdmChartRouting,
  ],
  declarations: [
    FdmChartComponent,
  ],
})
export class FdmChartModule{ }
