import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticulo } from 'src/app/models/articulo';
import { ICategoria } from 'src/app/models/categoria';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-cuerpo-busqueda',
  templateUrl: './cuerpo-busqueda.component.html',
  styleUrls: ['./cuerpo-busqueda.component.css']
})
export class CuerpoBusquedaComponent implements OnInit {

  public items: IArticulo[] = [];
  public category: ICategoria = <ICategoria>{};

  constructor(private _itemService: ItemService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
     this._route.params.subscribe((params) => {
        let categoryId = params['id'];

        if(categoryId)
          this.getItems(categoryId);
     });
  }


  getItems(categoryId: string) {
    this._itemService.getItems(categoryId).subscribe((items) => {
      this.items = items;
    });
  }

}
