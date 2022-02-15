import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IArticulo } from 'src/app/models/articulo';
import { ICategoria } from 'src/app/models/categoria';
import { IPeriod } from 'src/app/models/period';
import { articles } from 'src/app/mucks/articles.muck.';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';
import { PeriodService } from 'src/app/services/period.service';
import { FilterPipe } from '../../pipes/filter.pipe';

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
  categoryId: string = ""
  @Input() filterItems: string = ""
  filteredItems: IArticulo[] = [];

  constructor(private _itemService: ItemService,
    private _categoryService: CategoryService,
    private _period: PeriodService,
    private _route: ActivatedRoute,
    private filterPipe: FilterPipe) { }

  ngOnInit(): void {

    this._route.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.section = params['name'];

      if (this.categoryId) {
        this.getCurrentPeriod(this.categoryId);
        this.getCategoryById(this.categoryId);
        this.saveCategoryId(this.categoryId);
        return;
      }

      this.categoryId = this.getCategoryId() || "";

      if (this.categoryId) {
        this.getCurrentPeriod(this.categoryId);
        this.getCategoryById(this.categoryId);
        return;
      }
    });
  }


  getItems(periodoId: string, categoryId: string) {
    this._itemService.getItems(periodoId, categoryId).subscribe((items) => {
      this.items = items;
      this.filteredItems = this.items
    });
    // this.items = articles;
    // this.itemsFiltered = this.items
  }

  getCategoryById(categoryId: string) {
    this._categoryService.getCategoryById(categoryId).subscribe((category) => {
      this.category = category;
    });
  }

  getCurrentPeriod(categoryId: string) {
    this._period.getCurrentPeriod().subscribe((period) => {
      this.period = period;
      this.getItems(this.period.id, categoryId);
    });
    // this.items = articles;
    // this.itemsFiltered = this.items
  }

  saveCategoryId(categoryId: string) {
    localStorage.setItem('categoryId', categoryId);
  }

  getCategoryId(): string | null {
    return localStorage.getItem('categoryId');
  }

  getFilteredItems() {
    this.filteredItems = this.filterItems.trim() !== "" ? this.filterPipe.transform([...this.items], this.filterItems)
      : this.items
  }
}
