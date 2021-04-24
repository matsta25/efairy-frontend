import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ModeratorRoutingModule } from './moderator-routing.module'
import { ModeratorComponent } from './moderator.component'
import { ModeratorQuestionsListComponent } from './components/moderator-questions-list/moderator-questions-list.component'
import { SharedModule } from '../../shared/shared.module';
import { ModeratorCreateAnswerComponent } from './components/moderator-create-answer/moderator-create-answer.component'


@NgModule({
  declarations: [
    ModeratorComponent,
    ModeratorQuestionsListComponent,
    ModeratorCreateAnswerComponent,
  ],
  imports: [
    CommonModule,
    ModeratorRoutingModule,
    SharedModule,
  ],
})
export class ModeratorModule {
}
