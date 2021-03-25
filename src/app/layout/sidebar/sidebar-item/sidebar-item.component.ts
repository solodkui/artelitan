import { Component, Input, OnInit } from '@angular/core';
import { NewsItem } from 'src/app/interfaces/news-item';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  host: { class: 'e-sidebar-item' },
  
})
export class SidebarItemComponent {
  @Input() data: NewsItem;
}
