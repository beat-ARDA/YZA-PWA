import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPeriod } from '../models/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  private url: string = environment.API_URL + environment.ENDPOINT_PERIOD;

  constructor(private httpClient: HttpClient) { }

  getCurrentPeriod(): Observable<IPeriod> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true'
    })

    return this.httpClient.get<IPeriod>(`${this.url}/current`, { headers });
  }


}
