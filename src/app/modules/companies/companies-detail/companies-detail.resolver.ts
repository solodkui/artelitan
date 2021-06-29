import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { CompaniesService } from '../companies.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyTypes } from 'src/app/interfaces/companies.types';

@Injectable()
export class CompaniesDetailResolver implements Resolve<CompanyTypes> {

  constructor(private companiesService: CompaniesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CompanyTypes> {
    const id: number = +route.paramMap.get('id');
    return this.companiesService.getCompanyById(id);
  }
}