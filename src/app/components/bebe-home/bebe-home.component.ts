import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoria } from 'src/app/models/categoria';
import { IPeriod } from 'src/app/models/period';
import { categories } from 'src/app/mucks/categories.muck';
import { CategoryService } from 'src/app/services/category.service';
import { PeriodService } from 'src/app/services/period.service';

@Component({
  selector: 'app-bebe-home',
  templateUrl: './bebe-home.component.html',
  styleUrls: ['./bebe-home.component.css']
})
export class BebeHomeComponent implements OnInit {

  public categories: ICategoria[] = [];
  public periodo: IPeriod = <IPeriod>{};

  constructor(
    private _route: ActivatedRoute,
    private _categoryService: CategoryService,
    private _periodoService: PeriodService) { }

  ngOnInit(): void {

    this._route.params.subscribe((params) => {
       let typeResume = params['name'];

       if(typeResume)
          this.getCurrentPeriodo(typeResume);
    });              
  }

  getCurrentPeriodo(typeResume: string) {
    // this._periodoService.getCurrentPeriod().subscribe((period) => {
    //   this.periodo = period;
    //   this.getCategories(this.periodo.id, typeResume);
    // });
    this.categories = categories
  }

  getCategories(periodoId: string, typeResume: string) {
    this._categoryService.getCategories(periodoId ,typeResume).subscribe((categories) => {
      this.categories = categories;  
    })
  }

}
