import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadExportComponent } from './upload-export.component';

const routes: Routes = [{
  path: '',
  component: UploadExportComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadExportRouting { }
