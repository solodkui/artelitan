import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { NewsItemDetail } from 'src/app/interfaces/news-item';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  host: { class: 'c-news-detail' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailComponent {
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
  newsDetail: NewsItemDetail;

  constructor(private route: ActivatedRoute) {
    this.newsDetail = this.route.snapshot.data.newsDetail;
    // Add Breadcrumbs
    this.breadcrumbs[2] = {
      link: '/news/detail/' + this.newsDetail.id,
      title: this.newsDetail.title,
      customTextMode: true,
    };
  }
}
