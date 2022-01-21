import { Component, OnInit } from '@angular/core';
import { ItemMenu } from 'src/app/models/ItemMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public items: Array<ItemMenu>;
  public ultimoElemento: string;

  constructor(private _router: Router) {
    this.items = [
      new ItemMenu(false, "SOI", "../../../assets/Android/hdpi/ic_soi_on.png", "../../../assets/Android/hdpi/ic_soi_off.png"),
      new ItemMenu(false, "Bebe", "../../../assets/Android/hdpi/ic_bb_on.png", "../../../assets/Android/hdpi/ic_bb_off.png"),
      new ItemMenu(false, "Farma", "../../../assets/Android/hdpi/ic_farma_on.png", "../../../assets/Android/hdpi/ic_farma_off.png"),
      new ItemMenu(false, "Farma AC", "../../../assets/Android/hdpi/ic_farma_ac_on.png", "../../../assets/Android/hdpi/ic_farma_ac_off.png"),
      new ItemMenu(false, "EVO Farma", "../../../assets/Android/hdpi/ic_evo_farma_on.png", "../../../assets/Android/hdpi/ic_evo_farma_off.png")
    ];
    this.items[0].activado = true;
    this.ultimoElemento = this.items[0].nombre;
  }

  ngOnInit(): void {
  }

  clickItem(_item: string) {
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


