import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  host: { class: 'c-header' },
})
export class HeaderComponent {
  openMenu: boolean = false;
}