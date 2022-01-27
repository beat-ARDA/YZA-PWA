import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { concat, Subscription } from 'rxjs';

@Component({
  selector: 'app-bebe-home',
  templateUrl: './bebe-home.component.html',
  styleUrls: ['./bebe-home.component.css']
})
export class BebeHomeComponent implements OnInit {
  urlTitulo: any;
  cards: any;
  cardsFarma: any;
  cardsAc:any;
  cardsHCP:any;
  cardsNone:any;
  private sub: Subscription;

  constructor(private _router: Router) {
    this.sub = this._router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
       
        if (event.url.split("/").length > 2){
          let urlArray = event.url.split("/")[2].replace("%20", " ");
          this.urlTitulo = decodeURI(urlArray);
          console.log(this.urlTitulo);
          
        }
      }
    });

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

    this.cardsFarma = [
      {
        nombre: 'Naproxeno',
        moneyUnid: '$ 3.320/ 9%',
        moneyCont: '$ 405.117/ 57%',
        moneyVenta: '$ 178.567/ 6% ',
        moneyMargen: '12%'
      },
      {
        nombre: 'Vitamina',
        moneyUnid: '$ 14.268/ 71%',
        moneyCont: '$ 417.962/ 112%',
        moneyVenta: '$ 680.638/ 36% ',
        moneyMargen: '11%'
      },
      {
        nombre: 'Acido Acetilsalicilico',
        moneyUnid: '$ 1.861/ 7%',
        moneyCont: '$ 131.824/ 168%',
        moneyVenta: '$ 212.057/ 12% ',
        moneyMargen: '9%'
      },
      {
        nombre: 'Tadalafil',
        moneyUnid: '$ 15.476/ 143%',
        moneyCont: '$ 273.171/ 96%',
        moneyVenta: '$ 200.342/ 12% ',
        moneyMargen: '13%'
      },
      {
        nombre: 'Sildenafil',
        moneyUnid: '$ 7.816/ 20%',
        moneyCont: '$ 430.228/ 56%',
        moneyVenta: '$ 435.021/ 35% ',
        moneyMargen: '10%'
      }
    ];

    this.cardsAc = [
      {
        nombre: 'Omeprazol',
        moneyUnid: '$ 8.117/ 18%',
        moneyCont: '$ 288.332/ 15%',
        moneyVenta: '$ 722.261/ 22% ',
        moneyMargen: '5%'
      },
      {
        nombre: 'Pantoprazol',
        moneyUnid: '$ 2.475/ 31%',
        moneyCont: '$ 113.245/ 10%',
        moneyVenta: '$ 327.502/ 16% ',
        moneyMargen: '4%'
      },
      {
        nombre: 'Pregabalina',
        moneyUnid: '$ 3.113/ 44%',
        moneyCont: '$ 503.594/ 61%',
        moneyVenta: '$ 638.566/ 40% ',
        moneyMargen: '18%'
      },
      {
        nombre: 'Atorvastatina',
        moneyUnid: '$ 263/ 7%',
        moneyCont: '$ 23.394/ 5%',
        moneyVenta: '$ 36.220/ 4% ',
        moneyMargen: '4%'
      },
      {
        nombre: 'Diosmina',
        moneyUnid: '$ 341/ 5%',
        moneyCont: '$ 62.022/ 11%',
        moneyVenta: '$ 226.350/ 12% ',
        moneyMargen: '0%'
      }
    ];

    this.cardsFarma = [
      {
        nombre: 'Naproxeno',
        moneyUnid: '$ 3.320/ 9%',
        moneyCont: '$ 405.117/ 57%',
        moneyVenta: '$ 178.567/ 6% ',
        moneyMargen: '12%'
      },
      {
        nombre: 'Vitamina',
        moneyUnid: '$ 14.268/ 71%',
        moneyCont: '$ 417.962/ 112%',
        moneyVenta: '$ 680.638/ 36% ',
        moneyMargen: '11%'
      },
      {
        nombre: 'Acido Acetilsalicilico',
        moneyUnid: '$ 1.861/ 7%',
        moneyCont: '$ 131.824/ 168%',
        moneyVenta: '$ 212.057/ 12% ',
        moneyMargen: '9%'
      },
      {
        nombre: 'Tadalafil',
        moneyUnid: '$ 15.476/ 143%',
        moneyCont: '$ 273.171/ 96%',
        moneyVenta: '$ 200.342/ 12% ',
        moneyMargen: '13%'
      },
      {
        nombre: 'Sildenafil',
        moneyUnid: '$ 7.816/ 20%',
        moneyCont: '$ 430.228/ 56%',
        moneyVenta: '$ 435.021/ 35% ',
        moneyMargen: '10%'
      }
    ];

    this.cardsHCP = [
      {
        nombre: 'Artículos para afeitar',
        moneyUnid: '$ 5.233/ 26%',
        moneyCont: '$ 174.637/ 112%',
        moneyVenta: '$ 172.521/ 23% ',
        moneyMargen: '15%'
      },
      {
        nombre: 'Protección Femenina',
        moneyUnid: '$ 2.475/ 31%',
        moneyCont: '$ 113.245/ 10%',
        moneyVenta: '$ 327.502/ 16% ',
        moneyMargen: '4%'
      },
      {
        nombre: 'Removedores',
        moneyUnid: '$ 3.113/ 44%',
        moneyCont: '$ 503.594/ 61%',
        moneyVenta: '$ 638.566/ 40% ',
        moneyMargen: '18%'
      },
      {
        nombre: 'Ropa interior',
        moneyUnid: '$ 263/ 7%',
        moneyCont: '$ 23.394/ 5%',
        moneyVenta: '$ 36.220/ 4% ',
        moneyMargen: '4%'
      },
      {
        nombre: 'Bloqueador',
        moneyUnid: '$ 341/ 5%',
        moneyCont: '$ 62.022/ 11%',
        moneyVenta: '$ 226.350/ 12% ',
        moneyMargen: '0%'
      }
    ];
  }

  ngOnInit(): void {
  }

}
