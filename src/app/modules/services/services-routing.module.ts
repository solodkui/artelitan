import { ServicesContentComponent } from './services-content/services-content.component';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ServicesResolver } from './services.resolver';
import { ServicesComponent } from './services.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServicesProductsPageComponent } from './services-products-page/services-products-page.component';
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { ServicesDetailResolver } from './services-detail/services-detail.resolver';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        component: ServicesMainComponent,
        resolve: { services: ServicesResolver },
      },
      {
        path: 'content/:id',
        component: ServicesContentComponent,
        resolve: { services: ServicesResolver },
      },
      {
        path: 'products/:id',
        component: ServicesProductsPageComponent,
        resolve: { services: ServicesResolver },
      },
      {
        path: 'detail/:id',
        component: ServicesDetailComponent,
        resolve: {
          services: ServicesResolver,
          servicesDetail: ServicesDetailResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
