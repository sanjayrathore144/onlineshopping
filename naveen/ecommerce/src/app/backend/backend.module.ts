import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BackendComponent } from './backend.component';

import { BackendRoutingModule } from './backend-routing.module';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './product/create/create.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BackendComponent,
    ProductComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BackendRoutingModule
  ]
})
export class BackendModule { }
