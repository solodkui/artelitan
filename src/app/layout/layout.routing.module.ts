import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SidebarResolver } from './sidebar/sidebar.resolver';

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
    ],
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
