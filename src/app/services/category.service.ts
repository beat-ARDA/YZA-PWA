import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoria } from '../models/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = environment.API_URL + environment.ENDPOINT_CATEGORIES;

  constructor(private httpClient: HttpClient) { }

  getCategories(typeResume: string): Observable<ICategoria[]> {
      return this.httpClient.get<ICategoria[]>(`${this.url}/${typeResume}`);
  }
}
