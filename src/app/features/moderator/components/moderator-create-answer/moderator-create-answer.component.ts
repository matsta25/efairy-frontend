import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { createModeratorAnswer } from '../../store/moderator.actions'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { Question } from '../../../questions/model/questions.model'
import { selectQuestion } from '../../../questions/store/questions.selectors'

@Component({
  selector: 'app-moderator-create-answer',
  templateUrl: './moderator-create-answer.component.html',
  styleUrls: ['./moderator-create-answer.component.scss'],
})
export class ModeratorCreateAnswerComponent implements OnInit {

  public id: null

  public question$: Observable<Question>

  public answerForm = new FormGroup({
    content: new FormControl('', [Validators.required]),
  })

  constructor(
    private store: Store<AppState>,
    private router: ActivatedRoute,
  ) {
    this.question$ = store.pipe(select(selectQuestion))
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
  }

  public onSubmit(): void {
    this.store.dispatch(createModeratorAnswer({ id: this.id, content: this.answerForm.value.content}))
  }
}
