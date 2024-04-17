import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { RouterModule } from '@angular/router';
import { MyCartComponent } from './my-cart/my-cart.component';



@NgModule({
  declarations: [
    CartSummaryComponent,
    MyCartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyCartComponent
      }
    ])
  ],
  exports: [
    CartSummaryComponent
  ]
})
export class CartModule { }
