import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  InputFormComponent} from "./input-form.component";

const routes: Routes = [
  {path:'' ,component:InputFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputFormRoutingModule { }
