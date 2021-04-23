import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HoroscopeComponent } from '../horoscope/horoscope.component'
import { QuestionsListComponent } from './components/questions-list/questions-list.component'
import { QuestionCreateComponent } from './components/question-create/question-create.component'

const routes: Routes = [
  {
    path: '',
    component: HoroscopeComponent,
    children: [
      {
        path: 'list',
        component: QuestionsListComponent,
      },
      {
        path: 'create',
        component: QuestionCreateComponent,
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule { }
