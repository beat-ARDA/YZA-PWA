import { HttpClient } from '@angular/common/http';
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

  getSoiResume(): Observable<ISoiResume[]> {
    return this.httpClient.get<ISoiResume[]>(this.url);
  }
  
}
