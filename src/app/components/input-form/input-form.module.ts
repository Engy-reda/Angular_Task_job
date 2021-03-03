import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputFormRoutingModule } from './input-form-routing.module';

import { InputFormComponent } from "./input-form.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputFormComponent,

  ],
  imports: [
    CommonModule,
    InputFormRoutingModule,
    FormsModule, 
    ReactiveFormsModule ,
    

    
  ]
})
export class InputFormModule { }
