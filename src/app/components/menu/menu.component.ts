import { Component, OnInit, Input } from '@angular/core';
import { ItemMenu } from 'src/app/models/ItemMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() url: string;
  @Input() urlDetalles: string;
  public items: Array<ItemMenu>;
  public itemsDetalles: Array<ItemMenu>;
  public ultimoElemento: string;

  constructor(private _router: Router) {

    this.items = [
      new ItemMenu("SOI", false, "SOI", "../../../assets/Android/hdpi/ic_soi_on.png", "../../../assets/Android/hdpi/ic_soi_off.png"),
      new ItemMenu("RESUMEN BEBE", false, "Bebe", "../../../assets/Android/hdpi/ic_bb_on.png", "../../../assets/Android/hdpi/ic_bb_off.png"),
      new ItemMenu("RESUMEN FARMA", false, "Farma", "../../../assets/Android/hdpi/ic_farma_on.png", "../../../assets/Android/hdpi/ic_farma_off.png"),
      new ItemMenu("RESUMEN FARMA AC", false, "Farma AC", "../../../assets/Android/hdpi/ic_farma_ac_on.png", "../../../assets/Android/hdpi/ic_farma_ac_off.png"),
      new ItemMenu("RESUMEN EVO FARMA", false, "EVO Farma", "../../../assets/Android/hdpi/ic_evo_farma_on.png", "../../../assets/Android/hdpi/ic_evo_farma_off.png")
    ];

    this.itemsDetalles = [
      new ItemMenu("COMPORTAMIENTO", false, "Comportamiento", "../../../assets/iOS/ic_comportamiento_on.png", "../../../assets/iOS/ic_comportamiento_off.png"),
      new ItemMenu("PORCENTAJES", false, "Porcentajes", "../../../assets/iOS/ic_porcentajes_on.png", "../../../assets/iOS/ic_porcentajes_off.png"),
      new ItemMenu("VARIACION", false, "Variación $$-%", "../../../assets/iOS/ic_variacion_on.png", "../../../assets/iOS/ic_variacion_off.png")
    ];

    this.urlDetalles = "";
    this.url = "";
    this.ultimoElemento = "";
    this.items[0].activado = true;
    this.itemsDetalles[0].activado = true;
  }

  ngOnInit(): void {
    this.ultimoElemento = this.url.split("/")[2];
  }

  ClickItemMenuPrincipal(_item: string) {
    let _ultimoElemento = this.ultimoElemento;
    let router = this._router;
    if (this.ultimoElemento !== _item) {
      this.items.map((item) => {
        if (item.nombre == _ultimoElemento)
          item.activado = false;
        else if (item.nombre == _item) {
          item.activado = true;
          router.navigate(['/home', item.nombre]);
        }
      });
      this.ultimoElemento = _item;
    }
  }
}