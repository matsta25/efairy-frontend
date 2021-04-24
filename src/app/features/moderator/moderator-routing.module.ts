import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HoroscopeComponent } from '../horoscope/horoscope.component'
import { AuthGuard } from '../../core/auth/services/auth.guard'
import { QuestionsListComponent } from '../questions/components/questions-list/questions-list.component'
import { RoleGuard } from '../../core/auth/services/role.guard'
import { UserRoles } from '../../core/auth/model/jwt.model'
import { QuestionCreateComponent } from '../questions/components/question-create/question-create.component'
import { ModeratorComponent } from './moderator.component'
import { ModeratorQuestionsListComponent } from './components/moderator-questions-list/moderator-questions-list.component'
import { ModeratorCreateAnswerComponent } from './components/moderator-create-answer/moderator-create-answer.component'

const routes: Routes = [
  {
    path: '',
    component: ModeratorComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'questions-list',
        component: ModeratorQuestionsListComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: UserRoles.MODERATOR,
        },
      },
      {
        path: ':id/question-create-answer',
        component: ModeratorCreateAnswerComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: UserRoles.MODERATOR,
        },
      },
      {
        path: '',
        redirectTo: 'questions-list',
        pathMatch: 'full',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeratorRoutingModule {
}
