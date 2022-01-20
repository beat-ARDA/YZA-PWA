import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  soi: boolean;
  bb: boolean;
  farma: boolean;
  ac: boolean;
  hcp: boolean;
  constructor() {
    this.soi = false;
    this.bb = false;
    this.farma = false;
    this.ac = false;
    this.hcp = false;

  }

  ngOnInit(): void {
  }

  cambioIcono(icono: string) {
    if (icono == 'SOI') {
      this.soi = true
    }
    else if (icono != 'SOI') {
      this.soi = false
    }
    if (icono == 'BEBE') {
      this.bb = true

    }
    else if (icono != 'BEBE') {
      this.bb = false
    }
    if (icono == 'FARMA') {
      this.farma = true

    }
    else if (icono != 'FARMA') {
      this.farma = false
    }
    if (icono == 'AC') {
      this.ac = true

    }
    else if (icono != 'AC') {
      this.ac = false
    }
    if (icono == 'HCP') {
      this.hcp = true

    }
    else if (icono != 'HCP') {
      this.hcp = false
    }

  }
}


