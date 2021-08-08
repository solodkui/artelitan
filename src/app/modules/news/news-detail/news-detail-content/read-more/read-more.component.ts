import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsItem } from 'src/app/interfaces/news-item';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  host: { class: 'c-read-more' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadMoreComponent {
  newsList: Array<NewsItem> = [];

  constructor(private route: ActivatedRoute) {
    this.newsList = this.route.snapshot.data.readMoreData;
  }
}
