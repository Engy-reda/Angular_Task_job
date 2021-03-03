import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import {  } from "./components/update/update.module";
import {  } from "./components/input-form/input-form.module";

const routes: Routes = [
  {path: '' ,component:HomeComponent},
  {path:'inputForm',loadChildren:'./components/input-form/input-form.module#InputFormModule'},
  {path:'update',loadChildren:'./components/update/update.module#UpdateModule'}
  // {path:'update/:id',loadChildren:'./components/update/update.module#UpdateModule'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
