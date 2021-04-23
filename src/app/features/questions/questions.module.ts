import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { QuestionsRoutingModule } from './questions-routing.module'
import { QuestionsComponent } from './questions.component'
import { QuestionsListComponent } from './components/questions-list/questions-list.component'
import { SharedModule } from '../../shared/shared.module'
import { QuestionCreateComponent } from './components/question-create/question-create.component'


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsListComponent,
    QuestionCreateComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    SharedModule,
  ],
})
export class QuestionsModule {
}
