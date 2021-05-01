import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { createModeratorAnswer, readModeratorQuestion } from '../../store/moderator.actions'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { selectModeratorQuestion } from '../../store/moderator.selectors'
import { ModeratorQuestion } from '../../model/moderator.model'

@Component({
  selector: 'app-moderator-create-answer',
  templateUrl: './moderator-create-answer.component.html',
  styleUrls: ['./moderator-create-answer.component.scss'],
})
export class ModeratorCreateAnswerComponent implements OnInit {

  public id: null

  public moderatorQuestion$: Observable<ModeratorQuestion>

  public answerForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.minLength(56)]),
  })

  constructor(
    private store: Store<AppState>,
    private router: ActivatedRoute,
  ) {
    this.moderatorQuestion$ = store.pipe(select(selectModeratorQuestion))
  }

  get content() {
    return this.answerForm.get('content')
  }

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id
    this.store.dispatch(readModeratorQuestion({id: this.id}))
  }

  public onSubmit(): void {
    this.store.dispatch(createModeratorAnswer({ id: this.id, content: this.answerForm.value.content}))
  }
}
