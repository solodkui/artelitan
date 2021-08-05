import { ServicesContentComponent } from './services-content/services-content.component';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesComponent } from './services.component';
import { ServicesResolver } from './services.resolver';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServicesProductsComponent } from './services-products/services-products.component';
import { ServicesProductsPageComponent } from './services-products-page/services-products-page.component';

@NgModule({
  declarations: [ServicesComponent, ServicesMainComponent, ServicesContentComponent, ServicesProductsComponent, ServicesProductsPageComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ],
  providers: [ServicesResolver]
})
export class ServicesModule { }
