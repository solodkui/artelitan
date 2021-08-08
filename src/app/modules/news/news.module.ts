import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsDetailResolver } from './news-detail/news-detail.resolver';
import { NewsMainComponent } from './news-main/news-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsResolver } from './news.resolver';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewsDetailMainComponent } from './news-detail/news-detail-main/news-detail-main.component';
import { NewsDetailMainSocialComponent } from './news-detail/news-detail-main/news-detail-main-social/news-detail-main-social.component';
import { NewsDetailContentComponent } from './news-detail/news-detail-content/news-detail-content.component';
import { ReadMoreComponent } from './news-detail/news-detail-content/read-more/read-more.component';
import { ReadMoreResolver } from './news-detail/news-detail-content/read-more/read-more.resolver';

@NgModule({
  declarations: [
    NewsComponent,
    NewsMainComponent,
    NewsDetailComponent,
    NewsDetailMainComponent,
    NewsDetailMainSocialComponent,
    NewsDetailContentComponent,
    ReadMoreComponent,
  ],
  imports: [CommonModule, NewsRoutingModule, SharedModule],
  providers: [NewsResolver, NewsDetailResolver, ReadMoreResolver],
})
export class NewsModule {}
