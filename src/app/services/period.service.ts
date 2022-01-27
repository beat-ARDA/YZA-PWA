import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get<IPeriod>(`${this.url}/current`);
  }


}
