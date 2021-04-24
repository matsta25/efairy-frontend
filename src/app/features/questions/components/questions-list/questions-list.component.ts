import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { Observable } from 'rxjs'
import { Question } from '../../model/questions.model'
import { selectQuestions } from '../../store/questions.selectors'
import { readQuestions } from '../../store/questions.actions'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss'],
})
export class QuestionsListComponent implements OnInit {

  public questions$: Observable<Question[]>

  constructor(
    private store: Store<AppState>,
  ) {
    this.questions$ = store.pipe(
      select(selectQuestions),
      map(questions => [...questions]
        .sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime())),
    )
  }

  ngOnInit(): void {
    this.store.dispatch(readQuestions())
  }
}
