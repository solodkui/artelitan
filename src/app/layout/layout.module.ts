import { NavigationComponent } from './header/navigation/navigation.component';
import { LocationComponent } from './header/location/location.component';
import { BurgerComponent } from './header/burger/burger.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { SidebarResolver } from './sidebar/sidebar.resolver';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
    LocationComponent,
    BurgerComponent,
    SidebarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule,
    SwiperModule
  ],
  providers: [
    SidebarResolver
  ]
})
export class LayoutModule { }
