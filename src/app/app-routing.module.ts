import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { authorizeGuard } from './guards/authorize.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: 'urunler',
        component: ProductListComponent
      },
      {
        path: 'urunler/:categoryId',
        component: ProductListComponent
      },
      {
        path: 'sepet',
        loadChildren: () => import('./modules/cart/cart.module').then(t => t.CartModule)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [authorizeGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(t => t.AdminModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(t => t.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
