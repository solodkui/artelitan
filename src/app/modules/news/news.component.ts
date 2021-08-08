import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  host: { class: 'l-news' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent {}
