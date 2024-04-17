import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent implements OnInit{

  products: Product[]= [];
  
  constructor(private productService: ProductService){}


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getApiProducts().subscribe(data => {
      this.products = data;
    });
  }

  remove(product: Product){
    if(confirm('Devam etmek istiyor musunuz?')){
      this.productService.deleteApiProduct(product.id!).subscribe(_ =>{
        this.getProducts();
      })
    }
  }
}
