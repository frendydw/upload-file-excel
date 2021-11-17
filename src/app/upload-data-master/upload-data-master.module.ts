import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NbButtonModule, NbLayoutModule, NbCardModule, NbSpinnerModule, NbSelectModule } from '@nebular/theme';
import { UploadDataMasterRouting } from './upload-data-master-routing.module';
import { UploadDataMasterComponent } from './upload-data-master.component';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    NbSelectModule,
    FormsModule,
    UploadDataMasterRouting
  ],
  declarations: [
    UploadDataMasterComponent,
  ],
})
export class UploadDataMasterModule { }
