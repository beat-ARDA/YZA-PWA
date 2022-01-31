import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IArticulo } from 'src/app/models/articulo';
import { ICategoria } from 'src/app/models/categoria';
import { IPeriod } from 'src/app/models/period';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';
import { PeriodService } from 'src/app/services/period.service';

@Component({
  selector: 'app-cuerpo-busqueda',
  templateUrl: './cuerpo-busqueda.component.html',
  styleUrls: ['./cuerpo-busqueda.component.css']
})
export class CuerpoBusquedaComponent implements OnInit {

  public period: IPeriod = <IPeriod>{};
  public category: ICategoria = <ICategoria>{};
  public items: IArticulo[] = [];
  public section: string = '';

  constructor(private _itemService: ItemService,
    private _categoryService: CategoryService,
    private _period: PeriodService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
     let categoryId;

     this._route.params.subscribe((params) => {
        categoryId = params['id'];
        this.section = params['name'];

        if(categoryId){
          this.getCurrentPeriod(categoryId);
          this.getCategoryById(categoryId);
          this.saveCategoryId(categoryId);
          return;
        }
        
        categoryId = this.getCategoryId();

        if(categoryId){
          this.getCurrentPeriod(categoryId);
          this.getCategoryById(categoryId);
          return;
        }
     });
  }


  getItems(periodoId: string, categoryId: string) {
    this._itemService.getItems(periodoId, categoryId).subscribe((items) => {
      this.items = items;
    });
  }

  getCategoryById(categoryId: string){
    this._categoryService.getCategoryById(categoryId).subscribe((category) => {
      this.category = category;
    });
  }

  getCurrentPeriod(categoryId: string) {
    this._period.getCurrentPeriod().subscribe((period) => {
      this.period = period;

      this.getItems(this.period.id, categoryId);
    });
  }

  saveCategoryId(categoryId: string){
    localStorage.setItem('categoryId', categoryId);
  }

  getCategoryId(): string | null {
    return localStorage.getItem('categoryId');
  }

}
