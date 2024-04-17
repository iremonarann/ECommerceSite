import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];

  constructor() {
    this.cart = this.cartData;
  }

  addToCart(product: Product) {

    let cartItem = this.cart.find(t => t.product.id == product.id);

    if (cartItem)
      cartItem.quantity += 1;
    else
      this.cart.push({
        quantity: 1,
        product: product
      });

    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  public get totalQuantity(): number {
    return this.cartData.reduce((sum, cartItem) => sum + cartItem.quantity, 0);
  }

  public get totalPrice(): number {
    return this.cartData.reduce((sum, cartItem) => sum + (cartItem.quantity * cartItem.product.unitPrice!), 0);
  }

  public get cartData(): CartItem[] {
    let cartJson = localStorage.getItem('cart');
    if(!cartJson)
      return [];

    return JSON.parse(cartJson);
  }


}
