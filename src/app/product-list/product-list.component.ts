import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: ``
})
export class ProductListComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService : ProductService,
              private cartService: CartService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //let categoryId = this.activatedRoute.snapshot.params["categoryId"];
    //console.log("categoryId ->", categoryId);

    this.activatedRoute.params.subscribe(prms => {
      let categoryId = prms["categoryId"]; 
      console.log("categoryId ->", categoryId);
      this.getProducts(categoryId);
    })
    

  }

  getProducts(categoryId?: number){
    if(categoryId){
      this.productService.getApiProductsByCategoryId(categoryId).subscribe(data => {
        this.products = data;
      })
    }
    else{
      this.productService.getApiProducts().subscribe(data => {
        this.products = data;
      })
    }
  }

  addToCart(product: Product){
    this.cartService.addToCart(product); 
  }


}
