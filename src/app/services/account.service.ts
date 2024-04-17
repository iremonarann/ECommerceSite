import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../models/token.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  login(username:string, password:string): Observable<Token>{
    let body: any = {
      "username": username,
      "password": password
    };

    return this.httpClient.post<Token>(`${environment.baseUrl}/api/accounts/login`, body);
  }
}
