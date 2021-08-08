import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryItem } from '../interfaces/category-item';
import { NewsItem } from '../interfaces/news-item';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  getNews(count: number = 3): Observable<Array<NewsItem>> {
    return this.http
    .get<Array<NewsItem>>(`${environment.api}NewsArticle/GetLastNews?count=${count}`, {
      withCredentials: false,
    });
  }

  getCategories(): Observable<Array<CategoryItem>> {
    return this.http
    .get<Array<CategoryItem>>(`${environment.api}/Category/GetAllCategories`, {
      withCredentials: false,
    });
  }
}
