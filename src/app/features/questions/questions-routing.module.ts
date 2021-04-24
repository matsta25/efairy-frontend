import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { QuestionsListComponent } from './components/questions-list/questions-list.component'
import { QuestionCreateComponent } from './components/question-create/question-create.component'
import { AuthGuard } from '../../core/auth/services/auth.guard'
import { RoleGuard } from '../../core/auth/services/role.guard'
import { UserRoles } from '../../core/auth/model/jwt.model'
import { QuestionsComponent } from './questions.component'
import { QuestionShowAnswerComponent } from './components/question-show-answer/question-show-answer.component'

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: QuestionsListComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: UserRoles.USER,
        },
      },
      {
        path: 'create',
        component: QuestionCreateComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: UserRoles.USER,
        },
      },
      {
        path: ':id/show-answer',
        component: QuestionShowAnswerComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: UserRoles.USER,
        },
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule { }
