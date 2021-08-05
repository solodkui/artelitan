import { CompaniesItem, CompanyTypes } from 'src/app/interfaces/companies.types';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  constructor(private http: HttpClient) {}

  getCompanies(size: number = 2, offset: number = 0, filters: Array<number> = []): Observable<Array<CompaniesItem>> {
    // TODO --- filters - Edit in future
    return this.http.get<Array<CompaniesItem>>(
      `${environment.api}/Company/GetAllCompanies?size=${size}&offset=${offset}`,
      {
        withCredentials: false,
      }
    );
  }

  getCompanyById(id: number): Observable<CompanyTypes> {
    return this.http.get<CompanyTypes>(
      `${environment.api}/Company/GetCompanyById?companyId=${id}`,
      {
        withCredentials: false,
      }
    );
  }
}
