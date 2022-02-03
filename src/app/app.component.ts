import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy, OnInit {
  public title = 'YZA-PWA';
  public url: string;
  public urlDetalles: string;
  public urlTitulo = 'Soi';
  private sub: Subscription;

  constructor(private router: Router) {
    this.urlDetalles = "";
    this.url = "";

    this.sub = this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        this.urlDetalles = event.url.split("/")[1];
        if (event.url.split("/").length > 2) {
          let urlArray = event.url.split("/")[2].replace("%20", " ");
          this.urlTitulo = decodeURI(urlArray);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
