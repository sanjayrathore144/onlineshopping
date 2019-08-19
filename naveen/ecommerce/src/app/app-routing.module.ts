import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';/* 
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { HomeComponent } from './frontend/home/home.component'; */

const routes: Routes = [
  { path: "", loadChildren:"./frontend/frontend.module#FrontendModule"},
  { path: "dashboard", loadChildren:"./backend/backend.module#BackendModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
