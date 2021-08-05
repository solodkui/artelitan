import { CategoryItem } from 'src/app/interfaces/category-item';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<Array<CategoryItem>> {
    return this.http.get<Array<CategoryItem>>(`${environment.api}/Category/GetAllCategories`, {
      withCredentials: false,
    });
  }
}
