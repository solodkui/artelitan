import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { NewsItem } from 'src/app/interfaces/news-item';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  host: { class: 'c-news-main' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsMainComponent {
  breadcrumbs: Array<BreadcrumbsItem> = [
    {
      link: '/',
      title: 'news.breadcrumbs.main',
    },
    {
      link: '/news',
      title: 'news.breadcrumbs.news',
    },
  ];
  newsList: Array<Array<NewsItem>> = [];
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private newsService: NewsService
  ) {
    this.newsList.push(this.route.snapshot.data.news);
  }

  loadMore(): void {
    // TODO -- Need to re-edit in future
    this.loading = true;
    setTimeout(() => {
      this.newsList.push(this.newsService.getNews());
      this.loading = false;
      this.cdr.detectChanges();
    }, 1500);
  }
}
