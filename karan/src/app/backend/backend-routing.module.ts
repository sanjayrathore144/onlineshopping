import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent as ProductViewComponent }  from './products/view/view.component';
import { CreateComponent as ProductCreateComponent }  from './products/create/create.component';

const routes: Routes = [
  { path: "", component: BackendComponent, children:[
    { path: "", component: HomeComponent}, 
    { path: "products", component: ProductViewComponent}, 
    { path: "products/create", component: ProductCreateComponent}, 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
