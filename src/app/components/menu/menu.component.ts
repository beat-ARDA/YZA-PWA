import { Component, OnInit, Input } from '@angular/core';
import { ItemMenu } from 'src/app/models/ItemMenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() url: string;
  @Input() urlDetalles: string;
  @Input() titulo: string;
  public items: Array<ItemMenu>;
  public itemsDetalles: Array<ItemMenu>;

  constructor() {

    this.items = [
      new ItemMenu("Soi", "SOI", "../../../assets/Android/hdpi/ic_soi_on.png", "../../../assets/Android/hdpi/ic_soi_off.png"),
      new ItemMenu("Bebé", "BB", "../../../assets/Android/hdpi/ic_bb_on.png", "../../../assets/Android/hdpi/ic_bb_off.png"),
      new ItemMenu("HCP", "HCP", "../../../assets/Android/hdpi/ic_evo_farma_on.png", "../../../assets/Android/hdpi/ic_evo_farma_off.png"),
      new ItemMenu("Farma", "FARMA", "../../../assets/Android/hdpi/ic_farma_on.png", "../../../assets/Android/hdpi/ic_farma_off.png"),
      new ItemMenu("Farma ac", "FARMAAC", "../../../assets/Android/hdpi/ic_farma_ac_on.png", "../../../assets/Android/hdpi/ic_farma_ac_off.png")
    ];

    this.itemsDetalles = [
      new ItemMenu("Comportamiento", "Comportamiento", "../../../assets/icons/details/verde/comportamiento.svg", "../../../assets/icons/details/negro/comportamiento.svg"),
      new ItemMenu("Porcentajes", "Porcentajes", "../../../assets/icons/details/verde/porcentaje.svg", "../../../assets/icons/details/negro/porcentaje.svg"),
      new ItemMenu("Variacion", "Variación $$-%", "../../../assets/icons/details/verde/variacion.svg", "../../../assets/icons/details/negro/variacion.svg")
    ];

    this.urlDetalles = "";
    this.url = "";
    this.titulo = "";
  }

  ngOnInit(): void {
    
  }
}