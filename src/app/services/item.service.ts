import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IArticulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url: string  = environment.API_URL + environment.ENDPOINT_ITEMS;

  constructor(private httpClient: HttpClient) { }

  getItems(categoryId: string): Observable<IArticulo[]> {
    return this.httpClient.get<IArticulo[]>(`${this.url}/${categoryId}`);
  }
}
