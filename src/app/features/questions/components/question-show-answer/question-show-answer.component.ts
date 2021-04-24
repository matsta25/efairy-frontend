import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { ActivatedRoute } from '@angular/router'
import { readQuestion } from '../../store/questions.actions'
import { selectQuestion } from '../../store/questions.selectors'
import { Observable } from 'rxjs'
import { Question } from '../../model/questions.model'

@Component({
  selector: 'app-question-show-answer',
  templateUrl: './question-show-answer.component.html',
  styleUrls: ['./question-show-answer.component.scss'],
})
export class QuestionShowAnswerComponent implements OnInit {

  private id = null
  public question$: Observable<Question>

  constructor(
    private store: Store<AppState>,
    private router: ActivatedRoute,
  ) {
    this.question$ = store.pipe(select(selectQuestion))
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.store.dispatch(readQuestion({id: this.id}))
  }
}
