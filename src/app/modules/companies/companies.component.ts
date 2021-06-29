import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CompaniesContentTypes, CompaniesItem } from 'src/app/interfaces/companies.types';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService } from './companies.service';

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
      title: 'companies.breadcrumbs.main'
    },
    {
      link: '/companies',
      title: 'companies.breadcrumbs.companies'
    }
  ];
  activeCompaniesContentTypes = CompaniesContentTypes.BLOCK;
  companiesContentTypes = CompaniesContentTypes;
  companiesList: Array<CompaniesItem> = [];
  full: boolean = false;
  offset: number = 2;
  size: number = 2;

  constructor(
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private cdk: ChangeDetectorRef
  ) {
    this.companiesList = this.route.snapshot.data.companies;
    console.log(this.companiesList);
  }

  loadMore(): void {
    this.offset += 2;
    this.companiesService.getCompanies(this.size, this.offset).subscribe(response => {
      response.length ? this.companiesList = this.companiesList.concat(response) : this.full = true;
      this.cdk.detectChanges();
    });
  }
}
