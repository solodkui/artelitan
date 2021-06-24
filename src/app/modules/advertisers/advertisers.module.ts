import { AdvertisersRoutingModule } from './advertisers-routing.module';
import { AdvertisersComponent } from './advertisers.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AdvertisersComponent],
  imports: [
    CommonModule,
    AdvertisersRoutingModule,
    SharedModule
  ]
})
export class AdvertisersModule { }
