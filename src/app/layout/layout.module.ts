import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout.routing.module';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LocationComponent } from './header/location/location.component';
import { BurgerComponent } from './header/burger/burger.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, NavigationComponent, LocationComponent, BurgerComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
