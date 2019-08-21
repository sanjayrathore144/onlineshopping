import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BackendComponent } from './backend.component';

import { BackendRoutingModule } from './backend-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewComponent } from './products/view/view.component';
import { CreateComponent } from './products/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BackendComponent,
    SidebarComponent,
    ViewComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    BackendRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class BackendModule { }
