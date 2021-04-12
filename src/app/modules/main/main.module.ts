import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainSliderComponent } from './main-slider/main-slider.component';

@NgModule({
  declarations: [MainComponent, MainSliderComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
