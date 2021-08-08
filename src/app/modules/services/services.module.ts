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
import { ServicesDetailComponent } from './services-detail/services-detail.component';
import { ServicesDetailResolver } from './services-detail/services-detail.resolver';
import { ServicesDetailMainComponent } from './services-detail/services-detail-main/services-detail-main.component';
import { StarsComponent } from './services-detail/services-detail-main/stars/stars.component';
import { ServicesDetailSliderComponent } from './services-detail/services-detail-slider/services-detail-slider.component';
import { SwiperModule } from 'swiper/angular';
import { ServicesDetailCompanyComponent } from './services-detail/services-detail-company/services-detail-company.component';
import { ServicesDetailPriceListComponent } from './services-detail/services-detail-price-list/services-detail-price-list.component';

@NgModule({
  declarations: [ServicesComponent, ServicesMainComponent, ServicesContentComponent, ServicesProductsComponent, ServicesProductsPageComponent, ServicesDetailComponent, ServicesDetailMainComponent, StarsComponent, ServicesDetailSliderComponent, ServicesDetailCompanyComponent, ServicesDetailPriceListComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SwiperModule,
    SharedModule
  ],
  providers: [ServicesResolver, ServicesDetailResolver]
})
export class ServicesModule { }
