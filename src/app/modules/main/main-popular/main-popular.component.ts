import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductItem } from 'src/app/interfaces/products.types';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-popular',
  templateUrl: './main-popular.component.html',
})
export class MainPopularComponent {
  contentList: Array<ProductItem> = [];
  loading: boolean = false;

  constructor(private mainService: MainService, private cdr: ChangeDetectorRef) {
    this.getPopular();
  }

  private getPopular(): void {
    this.contentList = this.mainService.getPopular();
  }

  loadMore(): void {
    this.loading = true;
    setTimeout(() => {
      this.contentList = this.contentList.concat(this.mainService.getPopular());
      this.loading = false;
      this.cdr.detectChanges();
    }, 2000);
  }
}
