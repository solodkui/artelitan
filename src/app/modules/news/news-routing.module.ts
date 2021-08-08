import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsDetailResolver } from './news-detail/news-detail.resolver';
import { NewsMainComponent } from './news-main/news-main.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsResolver } from './news.resolver';
import { NgModule } from '@angular/core';
import { ReadMoreResolver } from './news-detail/news-detail-content/read-more/read-more.resolver';

const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: NewsMainComponent,
        resolve: { news: NewsResolver },
      },
      {
        path: 'detail/:id',
        component: NewsDetailComponent,
        resolve: { newsDetail: NewsDetailResolver, readMoreData: ReadMoreResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
