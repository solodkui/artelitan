import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { NewsItem, NewsItemDetail } from 'src/app/interfaces/news-item';
import { NewsService } from '../news.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewsDetailResolver implements Resolve<NewsItemDetail> {
  constructor(private newsService: NewsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<NewsItemDetail> | NewsItemDetail {
    const id: number = +route.paramMap.get('id');
    return this.newsService.getNewsById(id);
  }
}