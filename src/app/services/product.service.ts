import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }
  getAllWithSearch(search:string): Observable<ProductModel[]> {
        return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products').pipe(
            map(products=> products.filter(product=>product.title.startsWith(search)))
        );
    }

}
