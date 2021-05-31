import { MainPopularComponent } from './main-popular/main-popular.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainRoutingModule } from './main.routing';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MainComponent, MainSliderComponent, MainPopularComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    SwiperModule,
    SharedModule
  ]
})
export class MainModule { }
