import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-news-detail-main-social',
  templateUrl: './news-detail-main-social.component.html',
  host: { class: 'c-news-detail-main-social' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailMainSocialComponent {}
