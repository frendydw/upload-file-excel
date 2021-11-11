import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NbButtonModule, NbLayoutModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';
import { HomeRouting } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbSpinnerModule,
    HomeRouting
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
