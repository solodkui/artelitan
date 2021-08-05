import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  CompaniesContentTypes,
  CompaniesItem,
} from 'src/app/interfaces/companies.types';
import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { CompaniesService } from './companies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  host: { class: 'c-companies' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesComponent {
  breadcrumbs: Array<BreadcrumbsItem> = [
    {
      link: '/',
      title: 'companies.breadcrumbs.main',
    },
    {
      link: '/companies',
      title: 'companies.breadcrumbs.companies',
    },
  ];
  activeCompaniesContentTypes = CompaniesContentTypes.BLOCK;
  companiesContentTypes = CompaniesContentTypes;
  companiesList: Array<CompaniesItem> = [];
  filters: Array<number> = [];
  full: boolean = false;
  offset: number = 2;
  size: number = 2;

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private cdk: ChangeDetectorRef
  ) {
    this.companiesList = this.route.snapshot.data.companies;
  }

  setFilters(filterItems: Array<number>): void {
    this.filters = filterItems;
    this.loadMore(2);
  }

  loadMore(offset: number = null): void {
    this.offset = offset || (this.offset += 2);
    this.companiesService
      .getCompanies(this.size, this.offset, this.filters)
      .subscribe((response) => {
        if (response.length) {
          this.companiesList = offset
            ? (this.companiesList = response)
            : this.companiesList.concat(response);
        } else {
          this.full = true;
        }
        this.cdk.detectChanges();
      });
  }
}
