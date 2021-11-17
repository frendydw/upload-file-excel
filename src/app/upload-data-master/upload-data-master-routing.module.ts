import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadDataMasterComponent } from './upload-data-master.component';

const routes: Routes = [{
  path: '',
  component: UploadDataMasterComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadDataMasterRouting { 

}
