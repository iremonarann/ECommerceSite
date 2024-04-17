import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {}

  getApiCategories(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${environment.baseUrl}/api/Categories`);
  }
}
