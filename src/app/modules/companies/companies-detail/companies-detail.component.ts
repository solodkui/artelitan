import { BreadcrumbsItem } from 'src/app/interfaces/breadcrumbs.types';
import { CompanyTypes } from 'src/app/interfaces/companies.types';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-detail',
  templateUrl: './companies-detail.component.html',
})
export class CompaniesDetailComponent {
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
  companyInfo: CompanyTypes;

  constructor(private route: ActivatedRoute) {
    this.companyInfo = this.route.snapshot.data.companyDetail;
    console.log(this.companyInfo);
    this.editBreadcrumbs();
  }

  private editBreadcrumbs(): void {
    this.breadcrumbs.push({
      link: '/companies/' + this.companyInfo.id,
      title:
        this.companyInfo.legalName + ' / ' + this.companyInfo.commercialName,
      customTextMode: true,
    });
  }
}
