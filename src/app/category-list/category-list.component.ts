import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: ``
})
export class CategoryListComponent implements OnInit {

  title: string = "Categories"
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getApiCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
