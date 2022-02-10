import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISoiResume } from '../models/soiresume';

@Injectable({
  providedIn: 'root'
})
export class SoiresumeService {

  private url: string = environment.API_URL + environment.ENDPOINT_SOIRESUME;
  // headers = new HttpHeaders({
  //   'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
  //   'Ocp-Apim-Trace': "true"
  // })

  constructor(private httpClient: HttpClient) { }

  getSoiResume(periodoId: string): Observable<ISoiResume[]> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Ocp-Apim-Subscription-Key': environment.Ocp_Apim_Subscription_Key,
      'Ocp-Apim-Trace': 'true'
    })
    let params = new HttpParams();
    params = params.set('PeriodoId', periodoId)

    return this.httpClient.get<ISoiResume[]>(this.url, { params, headers });
  }

}
