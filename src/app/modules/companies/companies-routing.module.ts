import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies.component';
import { CompaniesResolver } from './companies.resolver';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
    resolve: { companies: CompaniesResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesRoutingModule {}
