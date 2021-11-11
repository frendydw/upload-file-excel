import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbButtonModule, NbLayoutModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { UploadImportRouting } from './upload-import-routing.module';
import { UploadImportComponent } from './upload-import.component';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    UploadImportRouting
  ],
  declarations: [
    UploadImportComponent,
  ],
})
export class UploadImportModule { }
