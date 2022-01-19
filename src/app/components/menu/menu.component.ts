import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    soi: boolean;
    bb: boolean;
    farma: boolean;
    ac:boolean;
    hcp:boolean;
  constructor(private header: HeaderService) { 
    this.soi= false;
    this.bb= false;
    this.farma= false;
    this.ac=false;
    this.hcp= false;

  }

  ngOnInit(): void {
  }

  cambioIcono(icono:string){
    if(icono == 'SOI'){
      this.soi= true
      this.header.changeMessage('SOI');
    }
    else if(icono != 'SOI'){
      this.soi= false
    }
    if(icono == 'BEBE'){
      this.bb=true
      this.header.changeMessage('RESUMEN BEBE');
    }
    else if(icono != 'BEBE'){
      this.bb= false
    }
    if(icono == 'FARMA'){
      this.farma= true
      this.header.changeMessage('RESUMEN FARMA');
    }
    else if(icono != 'FARMA'){
      this.farma= false
    }
    if(icono == 'AC'){
      this.ac= true
      this.header.changeMessage('RESUMEN FARMA AC');
    }
    else if(icono != 'AC'){
      this.ac= false
    }
    if(icono == 'HCP'){
      this.hcp= true
      this.header.changeMessage('RESUMEN HCP');
    }
    else if(icono != 'HCP'){
      this.hcp= false
    }

  }
}


