import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategoria } from 'src/app/models/categoria';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-bebe-home',
  templateUrl: './bebe-home.component.html',
  styleUrls: ['./bebe-home.component.css']
})
export class BebeHomeComponent implements OnInit {

  public categories: ICategoria[] = [];

  constructor(
    private _route: ActivatedRoute,
    private _categoryService: CategoryService) { }

  ngOnInit(): void {

    this._route.params.subscribe((params) => {
       let typeResume = params['name'];

       if(typeResume)
        this.getCategories(typeResume);
    });              
  }

  getCategories(typeResume: string) {
    this._categoryService.getCategories(typeResume).subscribe((categories) => {
      this.categories = categories;  
    })
  }

}
