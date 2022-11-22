import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BinanceModel } from '../models/binance.model';

@Injectable()
export class BinanceService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<BinanceModel[]> {
      return this._httpClient.get<BinanceModel[]>('https://api2.binance.com/api/v3/ticker/24hr')
  }
}
