import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArticulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string = environment.API_URL + environment.ENDPOINT_ITEMS;

  constructor(private httpClient: HttpClient) { }

  getItems(periodoId: string, categoryId: string): Observable<IArticulo[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true'
    })

    let params = new HttpParams();
    params = params.set('PeriodoId', periodoId);
    params = params.set('CategoriaId', categoryId);

    return this.httpClient.get<IArticulo[]>(`${this.url}`, { params, headers });
  }
}
