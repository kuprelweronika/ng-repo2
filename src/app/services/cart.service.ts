import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';
import {CartComponent} from "../components/cart/cart.component";
import {FormGroup} from "@angular/forms";

@Injectable()
export class CartService {
  constructor(private _httpClient: HttpClient) {
  }

    create(cart: { userId: number; products: Array<{ productId: number; quantity: number }>, date:any }):Observable<void> {
    return this._httpClient.post<void>('https://fakestoreapi.com/carts', cart);
  }



}
