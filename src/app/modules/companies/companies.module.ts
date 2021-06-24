import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompaniesComponent } from './companies.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesResolver } from './companies.resolver';

@NgModule({
  declarations: [CompaniesComponent, CompaniesListComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModule
  ],
  providers: [
    CompaniesResolver
  ]
})
export class CompaniesModule { }
