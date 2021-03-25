import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout.routing.module';
import { NavigationComponent } from './header/navigation/navigation.component';
import { LocationComponent } from './header/location/location.component';
import { BurgerComponent } from './header/burger/burger.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { SidebarResolver } from './sidebar/sidebar.resolver';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavigationComponent,
    LocationComponent,
    BurgerComponent,
    SidebarComponent,
    SidebarItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ],
  providers: [
    SidebarResolver
  ]
})
export class LayoutModule { }
