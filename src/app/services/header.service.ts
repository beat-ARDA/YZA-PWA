import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private message = new BehaviorSubject<string>('SOI');
  public customMessage = this.message.asObservable();
  constructor() {}
  public changeMessage(msg: string): void {
    this.message.next(msg);
  }
}
