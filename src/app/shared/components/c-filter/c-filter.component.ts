import { Component, Output, EventEmitter } from '@angular/core';
import { CategoryItem } from 'src/app/interfaces/category-item';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CFilterService } from './c-filter.service';

@Component({
  selector: 'app-c-filter',
  templateUrl: './c-filter.component.html',
  host: { class: 'c-filter' },
})
export class CFilterComponent {
  @Output() changeFilters = new EventEmitter<Array<number>>();
  categoryList: Array<CategoryItem> = [];
  activeFilterList: Array<number> = [];
  filterForm: FormGroup;
  showList: boolean = false;

  constructor(private cFilterService: CFilterService, private fb: FormBuilder) {
    this.getCategories();
  }

  editFilterIds(): void {
    const filterItems: Array<number> = [];
    Object.keys(this.filterForm.value).forEach((key) => {
      if (this.filterForm.value[key]) {
        filterItems.push(+key);
      }
    });
    this.changeFilters.emit(filterItems);
  }

  private getCategories(): void {
    this.cFilterService.getCategories().subscribe((categoryList) => {
      this.categoryList = categoryList.filter((item) => item.rootCategoryId);
      this.initForm();
    });
  }

  private initForm(): void {
    let newFormObject = {};
    this.categoryList.forEach((categoryItem) => {
      newFormObject[categoryItem.id] = [false];
    });
    this.filterForm = this.fb.group(newFormObject);
  }
}
