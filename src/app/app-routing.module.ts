import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule),
  },
  {
    path: 'upload-import',
    loadChildren: () => import('./upload-import/upload-import.module')
      .then(m => m.UploadImportModule),
  },
  {
    path: 'upload-export',
    loadChildren: () => import('./upload-export/upload-export.module')
      .then(m => m.UploadExportModule),
  },
  {
    path: 'fdm-chart',
    loadChildren: () => import('./fdm-chart/fdm-chart.module')
      .then(m => m.FdmChartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
