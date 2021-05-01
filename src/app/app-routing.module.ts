import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './core/components/home/home.component'
import { NotificationPageComponent, NotificationPageData } from './core/components/notification-page/notification-page.component'
import { StatusComponent } from './core/components/status/status.component'
import { TermsComponent } from './core/components/terms/terms.component'
import { AboutUsComponent } from './core/components/about-us/about-us.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'status',
    component: StatusComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'horoscope',
    loadChildren: () => import('./features/horoscope/horoscope.module').then(m => m.HoroscopeModule),
  },
  {
    path: 'questions',
    loadChildren: () => import('./features/questions/questions.module').then(m => m.QuestionsModule),
  },
  {
    path: 'moderator',
    loadChildren: () => import('./features/moderator/moderator.module').then(m => m.ModeratorModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: 'todos',
    loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule),
  },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'examples',
    loadChildren: () => import('./features/examples/examples.module').then(m => m.ExamplesModule),
  },
  {
    path: '**',
    component: NotificationPageComponent,
    data: ({
      type: 'error',
      title: 'Page not found',
      heading: '404',
      description: 'This is not the page you are looking for.',
    } as NotificationPageData),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy',
})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
