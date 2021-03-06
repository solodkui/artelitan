import { SidebarResolver } from './sidebar/sidebar.resolver';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: {
      news: SidebarResolver,
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../modules/main/main.module').then((m) => m.MainModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('../modules/services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('../modules/contacts/contacts.module').then(
            (m) => m.ContactsModule
          ),
      },
      {
        path: 'feedback',
        loadChildren: () =>
          import('../modules/feedback/feedback.module').then(
            (m) => m.FeedbackModule
          ),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'advertisers',
        loadChildren: () =>
          import('../modules/advertisers/advertisers.module').then(
            (m) => m.AdvertisersModule
          ),
      },
      {
        path: 'companies',
        loadChildren: () =>
          import('../modules/companies/companies.module').then(
            (m) => m.CompaniesModule
          ),
      },
      {
        path: 'news',
        loadChildren: () =>
          import('../modules/news/news.module').then((m) => m.NewsModule),
      },
      {
        path: '404',
        loadChildren: () =>
          import('../modules/error/error.module').then((m) => m.ErrorModule),
      },
    ],
  },
  { path: '*', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
