import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    soi: boolean;
    bb: boolean;
  constructor() { 
    this.soi= false;
    this.bb= false;

  }

  ngOnInit(): void {
  }

  cambioIcono(icono:string){
    if(icono == "SOI"){
      this.soi= true
    }
    else if(icono != "SOI"){
      this.soi= false
    }
    if(icono == "BEBE"){
      this.bb=true
    }
    else if(icono != "BEBE"){
      this.bb= false
    }

  }
}


