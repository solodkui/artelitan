import { Resolve } from '@angular/router';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsItem } from 'src/app/interfaces/news-item';
import { GlobalService } from 'src/app/services/global.service';

@Injectable()
export class SidebarResolver implements Resolve<Array<NewsItem>> {
  constructor(private globalService: GlobalService) {}

  resolve(): Observable<Array<NewsItem>> {
    return this.globalService.getNews();
  }
}