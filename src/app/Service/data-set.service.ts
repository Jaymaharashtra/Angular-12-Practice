import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataSetService {
  url = 'https://api.nationalize.io/?name=nathaniel';
  constructor(private http: HttpClient) {}
  funDataSet() {
    return this.http.get(this.url);
  }
}
