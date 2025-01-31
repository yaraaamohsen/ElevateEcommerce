import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }
  
  getAllProduct(): Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products`);
  }

  getSinglePost(): Observable<any>{
    return this._HttpClient.get(`https://fakestoreapi.com/products/1`);
  }
}
