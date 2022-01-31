import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoria } from '../models/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url: string = environment.API_URL + environment.ENDPOINT_CATEGORIES;

  constructor(private httpClient: HttpClient) { }

  getCategoryById(categoryId: string): Observable<ICategoria> {
    return this.httpClient.get<ICategoria>(`${this.url}/${categoryId}`);
  }

  getCategories(periodoId: string, typeResume: string): Observable<ICategoria[]> {

      let params = new HttpParams();
      params = params.set('PeriodoId', periodoId);
      params = params.set('TipoResumen', typeResume);

      return this.httpClient.get<ICategoria[]>(`${this.url}`, { params });
  }  
}
