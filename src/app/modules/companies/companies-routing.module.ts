import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesDetailComponent } from './companies-detail/companies-detail.component';
import { CompaniesDetailResolver } from './companies-detail/companies-detail.resolver';
import { CompaniesComponent } from './companies.component';
import { CompaniesResolver } from './companies.resolver';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
    resolve: { companies: CompaniesResolver },
  },
  {
    path: ':id',
    component: CompaniesDetailComponent,
    resolve: { companyDetail: CompaniesDetailResolver },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
