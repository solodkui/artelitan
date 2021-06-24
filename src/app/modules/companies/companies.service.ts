import { CompaniesItem } from 'src/app/interfaces/companies.types';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  getCompanies(size: number = 2, offset: number = 0): Observable<Array<CompaniesItem>> {
    return this.http.get<Array<CompaniesItem>>(
      `${environment.api}/Company/GetAllCompanies?size=${size}&offset=${offset}`,
      {
        withCredentials: false,
      }
    );
  }
}
