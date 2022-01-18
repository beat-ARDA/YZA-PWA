import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YZA-PWA';
  public url = "";
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router) { }

  ngDoCheck() {
    this.url = this.router.url;
  }

  logout() {
    this.authenticationService.logout();
  }
}
