import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getApiProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.baseUrl}/api/products`);
  }

  getApiProductsByCategoryId(categoryId: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.baseUrl}/api/categories/${categoryId}/products`);
  }

  getApiProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.baseUrl}/api/products/${id}`);
  }

  postApiProduct(product: Product): Observable<any> {
    // let authHeader= new HttpHeaders()
    // .set('Authorize',`Bearer ${localStorage.getItem('token')}`);

    // return this.httpClient.post<any>(`${environment.baseUrl}/api/products`, product, {
    //   headers: authHeader
    // });

    return this.httpClient.post<any>(`${environment.baseUrl}/api/products`, product);
  }

  putApiProduct(product: Product): Observable<any> {
    return this.httpClient.put<any>(`${environment.baseUrl}/api/products/${product.id}`, product);
  }

  deleteApiProduct(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.baseUrl}/api/products/${id}`);
  }
}
