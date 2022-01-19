import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cards: any;
  
  constructor() {
    this.cards = [
      {
        nombre: 'Venta',
        icono: '../../../assets/Assets/iOS/ic_venta.png',
        moneyP4: '$ 1.00.000',
        moneyP11: '$ 2.000.000',
        moneyVar: '$ 1.000.000',
      },
      {
        nombre: 'Unidades',
        icono: '../../../assets/Assets/iOS/ic_venta.png',
        moneyP4: '$ 300.000',
        moneyP11: '$ 1.000.000',
        moneyVar: '$ 700.000',
      },
      {
        nombre: 'Contribución',
        icono: '../../../assets/Assets/iOS/ic_venta.png',
        moneyP4: '$ 400.000',
        moneyP11: '$ 1.200.000',
        moneyVar: '$ 800.000',
      },
      {
        nombre: 'Margen',
        icono: '../../../assets/Assets/iOS/ic_venta.png',
        moneyP4: '30%',
        moneyP11: '60%',
        moneyVar: '30%',
      }
    ];
  }

  ngOnInit(): void {
    
   }
}
