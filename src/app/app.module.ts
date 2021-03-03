import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { StickyNavModule } from 'ng2-sticky-nav';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    StickyNavModule 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
