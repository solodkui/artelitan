import { CompaniesItem } from 'src/app/interfaces/companies.types';
import { CompaniesService } from './companies.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CompaniesResolver implements Resolve<Array<CompaniesItem>> {
  constructor(private companiesService: CompaniesService) {}

  resolve(): Observable<Array<CompaniesItem>> {
    return this.companiesService.getCompanies();
  }
}