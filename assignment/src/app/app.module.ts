import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';
import { HomeService } from './home/home.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NgxUiLoaderModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HomeService, NgxUiLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
