import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { ProductSaveComponent } from './product-save/product-save.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path:'products',
        component: ProductsComponent
      },
      {
        path:'product-save',
        component: ProductSaveComponent
      },
      {
        path:'product-save/:id',
        component: ProductSaveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
