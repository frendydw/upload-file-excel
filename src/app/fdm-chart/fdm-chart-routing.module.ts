import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FdmChartComponent } from './fdm-chart.component';

const routes: Routes = [{
  path: '',
  component: FdmChartComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FdmChartRouting { }
