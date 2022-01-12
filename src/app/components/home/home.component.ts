import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  boxes: any;
  constructor() {
    this.boxes=[{
      nombre:'Venta',
      icono:'iconoDolar fa fa-dollar-sign fa-2x icono-id',
      moneyP4: '$ 1.00.000',
      moneyP11:'$ 2.000.000',
      moneyVar:'$ 1.000.000'
    },
    {
      nombre:'Unidades',
      icono:'iconoCaja fas fa-box-open fa-2x',
      moneyP4: '$ 300.000',
      moneyP11:'$ 1.000.000',
      moneyVar:'$ 700.000'
    }
  ]
  }

  ngOnInit(): void {}
}
