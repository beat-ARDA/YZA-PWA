import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemMenu } from 'src/app/models/ItemMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: Array<ItemMenu>;
  public itemsDetalles: Array<ItemMenu>;
  public ultimoElemento: string;
  public url: string;

  ngDoCheck() {
    this.url = this._router.url;
    console.log(this.url, 'hola');
    
  }
  constructor(private _router: Router) {
    this.url ="/home";
    this._router.events.subscribe((val) => {
      console.log(val);
    })
    
    this.items = [
      new ItemMenu("SOI", false, "SOI", "../../../assets/Android/hdpi/ic_soi_on.png", "../../../assets/Android/hdpi/ic_soi_off.png"),
      new ItemMenu("RESUMEN BEBE", false, "Bebe", "../../../assets/Android/hdpi/ic_bb_on.png", "../../../assets/Android/hdpi/ic_bb_off.png"),
      new ItemMenu("RESUMEN FARMA", false, "Farma", "../../../assets/Android/hdpi/ic_farma_on.png", "../../../assets/Android/hdpi/ic_farma_off.png"),
      new ItemMenu("RESUMEN FARMA AC", false, "Farma AC", "../../../assets/Android/hdpi/ic_farma_ac_on.png", "../../../assets/Android/hdpi/ic_farma_ac_off.png"),
      new ItemMenu("RESUMEN EVO FARMA", false, "EVO Farma", "../../../assets/Android/hdpi/ic_evo_farma_on.png", "../../../assets/Android/hdpi/ic_evo_farma_off.png")
    ];
    this.itemsDetalles = [
      new ItemMenu("COMPORTAMIENTO", false, "Comportamiento", "../../../assets/Android/hdpi/ic_comportamiento_on.png", "../../../assets/Android/hdpi/ic_comportamiento_off.png"),
      new ItemMenu("PORCENTAJES", false, "Porcentajes", "../../../assets/Android/hdpi/ic_porcentajes_on.png", "../../../assets/Android/hdpi/ic_porcentajes_off.png"),
      new ItemMenu("VARIACION", false, "Variación $$-%", "../../../assets/Android/hdpi/ic_variacion_on.png", "../../../assets/Android/hdpi/ic_variacion_off.png")
    ];
    this.items[0].activado  = true;
    this.ultimoElemento = this.url=== '/detalles'?this.itemsDetalles[0].nombre: this.items[0].nombre;
  }

  ngOnInit(): void {
  }

  clickItem(_item: string) {
    this.url = this._router.url;
    let _ultimoElemento = this.ultimoElemento;
    let router = this._router;
    if (this.ultimoElemento !== _item) {
      this.items.map((item, index) => {
        if (item.nombre == _ultimoElemento)
          item.activado = false;
        else if (item.nombre == _item) {
          item.activado = true;
          index == 0 ? router.navigate(['/home']) : router.navigate(['/home', item.nombre]);
        }
      });
      this.ultimoElemento = _item;
    }
  }

  
}


