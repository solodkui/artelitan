import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryItem } from 'src/app/interfaces/category-item';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-c-search',
  templateUrl: './c-search.component.html',
  host: { class: 'c-search' },
})
export class CSearchComponent implements OnInit {
  searchForm: FormGroup;
  categoryList: Array<CategoryItem> = [];
  showFilter: boolean = false;

  constructor(
    private fb: FormBuilder,
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getCategories();
  }

  private initForm(): void {
    let newFormObject = {
      newsPage: [false],
      servicesPage: [false],
      companiesPage: [false]
    };
    this.categoryList.forEach(categoryItem => {
      newFormObject[categoryItem.rootCategoryId] = [false]
    });

    this.searchForm = this.fb.group(newFormObject)
  }

  private getCategories(): void {
    this.globalService.getCategories().subscribe(categoryList => {
      this.categoryList = categoryList;
      this.initForm();
    });
  }
  
}
