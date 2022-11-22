import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { UniversityModel } from '../models/university.model';
import {ProductModel} from "../models/product.model";

@Injectable()
export class UniversityService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(search: string): Observable<UniversityModel[]> {
      return this._httpClient.get<UniversityModel[]>(`http://universities.hipolabs.com/search?country=${search}`)
  }
}
