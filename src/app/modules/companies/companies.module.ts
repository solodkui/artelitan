import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompaniesComponent } from './companies.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesResolver } from './companies.resolver';
import { CompaniesDetailComponent } from './companies-detail/companies-detail.component';
import { CompaniesDetailResolver } from './companies-detail/companies-detail.resolver';
import { ProductsComponent } from './companies-detail/products/products.component';

@NgModule({
  declarations: [CompaniesComponent, CompaniesListComponent, CompaniesDetailComponent, ProductsComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModule
  ],
  providers: [
    CompaniesResolver,
    CompaniesDetailResolver
  ]
})
export class CompaniesModule { }
