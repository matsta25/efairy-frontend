import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Question } from '../../../questions/model/questions.model'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { selectQuestions } from '../../../questions/store/questions.selectors'
import { map } from 'rxjs/operators'
import { readQuestions } from '../../../questions/store/questions.actions'
import { ModeratorQuestion } from '../../model/moderator.model'
import { selectModeratorQuestions } from '../../store/moderator.selectors'
import { readModeratorQuestions } from '../../store/moderator.actions'

@Component({
  selector: 'app-moderator-questions-list',
  templateUrl: './moderator-questions-list.component.html',
  styleUrls: ['./moderator-questions-list.component.scss']
})
export class ModeratorQuestionsListComponent implements OnInit {

  public moderatorQuestions$: Observable<ModeratorQuestion[]>

  constructor(
    private store: Store<AppState>,
  ) {
    this.moderatorQuestions$ = store.pipe(
      select(selectModeratorQuestions),
      map(questions => [...questions]
        .sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime())),
    )
  }

  ngOnInit(): void {
    this.store.dispatch(readModeratorQuestions())
  }
}
