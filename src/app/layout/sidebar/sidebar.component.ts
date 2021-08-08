import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from 'src/app/interfaces/news-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  host: { class: 'c-sidebar' },
})
export class SidebarComponent implements AfterContentInit {
  newsList: Array<NewsItem> = [];
  swiper: any;

  constructor(private route: ActivatedRoute) { }

  ngAfterContentInit(): void {
    this.newsList = this.route.snapshot.data.news;
  }

  onSwiper(swiper: any): void {
    this.swiper = swiper;
    swiper.slideNext();
  }

  onSlideChange(): void {}

  next(): void {
    this.swiper.slideNext();
  }

  prev(): void {
    this.swiper.slidePrev();
  }
}
