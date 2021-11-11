import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbButtonModule, NbLayoutModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { UploadExportRouting } from './upload-export-routing.module';
import { UploadExportComponent } from './upload-export.component';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    UploadExportRouting
  ],
  declarations: [
    UploadExportComponent,
  ],
})
export class UploadExportModule { }
