import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-prueba',
  templateUrl: './menu-prueba.component.html',
  styleUrls: ['./menu-prueba.component.css']
})
export class MenuPruebaComponent implements OnInit {
  comp:boolean;
  por:boolean;
  variacion:boolean;
  constructor() {
    this.comp=false;
    this.por=false;
    this.variacion=false;
   }

  ngOnInit(): void {
  }

  cambioIcono(icono:string){
    if(icono == 'COMP'){
      this.comp= true
    }
    else if(icono != 'COMP'){
      this.comp= false
    }
    if(icono == 'POR'){
      this.por= true
    }
    else if(icono != 'POR'){
      this.por= false
    }
    if(icono == 'VARI'){
      this.variacion= true
    }
    else if(icono != 'VARI'){
      this.variacion= false
    }

  }

}
