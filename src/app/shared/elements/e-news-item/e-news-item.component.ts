import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from 'src/app/interfaces/news-item';

@Component({
  selector: 'app-e-news-item',
  templateUrl: './e-news-item.component.html',
  host: { class: 'e-news-item' },
})
export class ENewsItemComponent {
  @Input() withImage: boolean = false;
  @Input() newWindow: boolean = true;
  @Input() data: NewsItem;

  constructor(private router: Router) {}

  openPage(): void {
    this.newWindow
      ? window.open(this.data.sourceUrl, '_blank')
      : this.router.navigate(['/news/detail/' + this.data.id]);
  }
}
