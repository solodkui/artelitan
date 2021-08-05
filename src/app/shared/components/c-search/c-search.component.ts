import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryItem } from 'src/app/interfaces/category-item';
import { GlobalService } from 'src/app/services/global.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c-search',
  templateUrl: './c-search.component.html',
  host: { class: 'c-search' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CSearchComponent {
  categoryList: Array<CategoryItem> = [];
  showFilter: boolean = false;
  searchForm: FormGroup;
  searchValue: string;

  constructor(private fb: FormBuilder, private globalService: GlobalService) {
    this.getCategories();
  }

  search(): void {
    const searchItems = [];
    Object.keys(this.searchForm.value).forEach((key) => {
      if (this.searchForm.value[key]) {
        searchItems.push(+key || key);
      }
    });

    console.log(searchItems); // TODO
  }

  private initForm(): void {
    let newFormObject = {
      newsPage: [false],
      servicesPage: [false],
      companiesPage: [false],
    };
    this.categoryList.forEach((categoryItem) => {
      newFormObject[categoryItem.id] = [false];
    });

    this.searchForm = this.fb.group(newFormObject);
  }

  private getCategories(): void {
    this.globalService.getCategories().subscribe((categoryList) => {
      this.categoryList = categoryList.filter((item) => item.rootCategoryId);
      this.initForm();
    });
  }
}
