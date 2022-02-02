import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISoiResume } from '../models/soiresume';

@Injectable({
  providedIn: 'root'
})
export class SoiresumeService {

  private url: string = environment.API_URL + environment.ENDPOINT_SOIRESUME;

  constructor(private httpClient: HttpClient) { }

  getSoiResume(periodoId: string): Observable<ISoiResume[]> {
    let params = new HttpParams();
    params = params.set('PeriodoId', periodoId)

    return this.httpClient.get<ISoiResume[]>(this.url, { params });
  }
  
}
