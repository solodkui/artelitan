import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-detail-main',
  templateUrl: './news-detail-main.component.html',
  host: { class: 'c-news-detail-main' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailMainComponent {
  @Input() imageUrl: string;
  @Input() article: string;
  @Input() created: string;
  @Input() title: string;
}
