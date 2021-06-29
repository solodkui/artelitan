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
  loading: boolean = false;

  constructor(private mainService: MainService) {
    this.getProducts();
  }

  private getProducts(): void {
    this.productList = this.mainService.getPopular();
  }

  loadMore(): void {
    this.loading = true;
    setTimeout(() => {
      this.productList = this.productList.concat(this.mainService.getPopular());
      this.loading = false;
    }, 2000);
  }
}
