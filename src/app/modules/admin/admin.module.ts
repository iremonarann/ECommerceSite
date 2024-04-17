import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductsComponent } from './products/products.component';
import { ProductSaveComponent } from './product-save/product-save.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    ProductsComponent,
    ProductSaveComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
