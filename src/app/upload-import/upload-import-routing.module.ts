import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadImportComponent } from './upload-import.component';

const routes: Routes = [{
  path: '',
  component: UploadImportComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadImportRouting { }
