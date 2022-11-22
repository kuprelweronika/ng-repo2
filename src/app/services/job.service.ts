import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JobModel} from "../models/job.model";

@Injectable()
export class JobService {
  constructor(private _httpClient: HttpClient) {
  }

  create(job: JobModel): Observable<void> {
    return this._httpClient.post<void>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts', job);
  }
}
