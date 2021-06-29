import { AfterContentInit, Component } from '@angular/core';
import { CategoryItem } from 'src/app/interfaces/category-item';
import { CFilterService } from './c-filter.service';

@Component({
  selector: 'app-c-filter',
  templateUrl: './c-filter.component.html',
  host: { class: 'c-filter' },
})
export class CFilterComponent implements AfterContentInit {
  categoryList: Array<CategoryItem> = [];
  showList: boolean = false;

  constructor(private cFilterService: CFilterService) {}

  ngAfterContentInit(): void {
    this.cFilterService.getCategories().subscribe(response => {
      console.log('CATEGORIES: ', response);
      this.categoryList = response;
    });
  }
}
