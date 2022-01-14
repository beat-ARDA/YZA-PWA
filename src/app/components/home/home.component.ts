import { Component, OnInit } from '@angular/core';

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
        icono: '',
        moneyP4: '$ 1.00.000',
        moneyP11: '$ 2.000.000',
        moneyVar: '$ 1.000.000',
      },
      {
        nombre: 'Unidades',
        icono: 'iconoCaja fa fa-box-open fa-2x',
        moneyP4: '$ 300.000',
        moneyP11: '$ 1.000.000',
        moneyVar: '$ 700.000',
      },
      {
        nombre: 'Contribución',
        icono: 'iconoDolar fa fa-dollar-sign fa-2x icono-id',
        moneyP4: '$ 400.000',
        moneyP11: '$ 1.200.000',
        moneyVar: '$ 800.000',
      },
      {
        nombre: 'Margen',
        icono: 'iconoDolar fa fa-dollar-sign fa-2x icono-id',
        moneyP4: '30%',
        moneyP11: '60%',
        moneyVar: '30%',
      },
    ];
  }

  ngOnInit(): void {}
}
