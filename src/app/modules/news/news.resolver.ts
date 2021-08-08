import { NewsItem } from 'src/app/interfaces/news-item';
import { NewsService } from './news.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class NewsResolver implements Resolve<Array<NewsItem>> {
  constructor(private newsService: NewsService) {}

  resolve(): Observable<Array<NewsItem>> | Array<NewsItem> {
    return this.newsService.getNews();
  }
}