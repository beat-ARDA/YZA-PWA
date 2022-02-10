import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true'
    })

    return this.httpClient.get<ICategoria>(`${this.url}/${categoryId}`, { headers });
  }

  getCategories(periodoId: string, typeResume: string): Observable<ICategoria[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true'
    })

    let params = new HttpParams();
    params = params.set('PeriodoId', periodoId);
    params = params.set('TipoResumen', typeResume);

    return this.httpClient.get<ICategoria[]>(`${this.url}`, { params, headers });
  }
}
