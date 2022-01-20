import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebe-home',
  templateUrl: './bebe-home.component.html',
  styleUrls: ['./bebe-home.component.css']
})
export class BebeHomeComponent implements OnInit {
  cards: any;
  constructor(private _router: Router) {
    this.cards = [
      {
        nombre: 'Toallas Humedas',
        moneyUnid: '$ 23.384/ 30%',
        moneyCont: '$ 834.916/ 142%',
        moneyVenta: '$ 1.110.450/ 40% ',
        moneyMargen: '16%'
      },
      {
        nombre: 'Jabón Neutro',
        moneyUnid: '$ 23.384/ 30%',
        moneyCont: '$ 834.916/ 142%',
        moneyVenta: '$ 1.110.450/ 40% ',
        moneyMargen: '16%'
      },
      {
        nombre: 'Pañales',
        moneyUnid: '$ 23.384/ 30%',
        moneyCont: '$ 834.916/ 142%',
        moneyVenta: '$ 1.110.450/ 40% ',
        moneyMargen: '16%'
      },
      {
        nombre: 'Biberón',
        moneyUnid: '$ 47.973/ 754%',
        moneyCont: '$ 217.976/ 735%',
        moneyVenta: '$ 500.952/ 542% ',
        moneyMargen: '10%'
      },
      {
        nombre: 'Shampoo',
        moneyUnid: '$ 47.973/ 754%',
        moneyCont: '$ 217.976/ 735%',
        moneyVenta: '$ 500.952/ 542% ',
        moneyMargen: '10%'
      }
    ];
  }

  IrDetalles() {
    this._router.navigate(['/', 'detalles']).then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
  }

  ngOnInit(): void {
  }

}
