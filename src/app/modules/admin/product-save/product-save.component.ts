import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-save',
  templateUrl: './product-save.component.html',
  styles: ``
})
export class ProductSaveComponent implements OnInit {

  categories: Category[] = [];
  model: Product = {};

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    let productId = this.activatedRoute.snapshot.params['id'];
    if (productId)
      this.getProduct(productId);

    this.getCategories();
  }

  getProduct(id: number) {
    this.productService.getApiProductById(id).subscribe(data => {
      this.model = data;
      this.model.description = data.quantityPerUnit;
    })
  }
  getCategories() {
    this.categoryService.getApiCategories().subscribe(data => {
      this.categories = data;
    });
  }

  save() {

    let obsProduct = this.model.id
      ? this.productService.putApiProduct(this.model)
      : this.productService.postApiProduct(this.model);

    obsProduct.subscribe(_ => {
      this.router.navigateByUrl('/admin/products');
    });

  }
}
