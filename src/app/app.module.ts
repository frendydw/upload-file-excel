import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadComponent } from './upload/upload.component';
import { NbThemeModule, NbButtonModule, NbLayoutModule, NbCardModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbButtonModule,
    NbLayoutModule,
    NbCardModule,
    NbThemeModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
