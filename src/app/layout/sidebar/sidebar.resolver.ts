import { GlobalService } from 'src/app/services/global.service';
import { NewsItem } from 'src/app/interfaces/news-item';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class SidebarResolver implements Resolve<Array<NewsItem>> {
  constructor(private globalService: GlobalService) {}

  resolve(): Observable<Array<NewsItem>> {
    return this.globalService.getNews();
  }
}