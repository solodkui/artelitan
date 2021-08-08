import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NewsItemDetailContentItem } from 'src/app/interfaces/news-item';

@Component({
  selector: 'app-news-detail-content',
  templateUrl: './news-detail-content.component.html',
  host: { class: 'c-news-detail-content' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsDetailContentComponent {
  @Input() content: Array<NewsItemDetailContentItem> = [];
  playVideoIds: Array<boolean> = [];

  playVideo(id: number): void {
    const video: any = document.getElementById('video-' + id) //.play();
    this.playVideoIds[id] = true;
    video.controls = true;
    video.play();
  }
}
