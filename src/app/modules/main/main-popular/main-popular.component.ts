import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-popular',
  templateUrl: './main-popular.component.html',
})
export class MainPopularComponent implements OnInit {
  contentList: Array<any> = [];
  loading: boolean = false;

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
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
    }, 2000);
  }
}
