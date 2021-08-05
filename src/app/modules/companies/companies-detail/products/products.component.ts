import { ProductItem } from 'src/app/interfaces/products.types';
import { MainService } from 'src/app/modules/main/main.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  host: { class: 'c-companies-products' },
})
export class ProductsComponent {
  productList: Array<ProductItem> = [];
  filters: Array<number> = [];
  loading: boolean = false;
  offset: number = 2;
  size: number = 2;

  constructor(private mainService: MainService) {
    this.getProducts();
  }

  private getProducts(): void {
    this.productList = this.mainService.getPopular();
  }

  loadMore(offset: number = null): void {
    this.offset = offset || (this.offset += 2);
    this.loading = true;
    // TODO --- Custom (need to re-edit in future)
    setTimeout(() => {
      this.productList = this.productList.concat(this.mainService.getPopular(this.size, this.offset, this.filters));
      this.loading = false;
    }, 1500);
  }

  setFilters(filterItems: Array<number>): void {
    this.filters = filterItems;
    this.loadMore(2);
  }
}
