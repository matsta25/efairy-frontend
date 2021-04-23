import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { readDailyHoroscope } from '../../../horoscope/store/horoscope.actions'
import { Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { createQuestion } from '../../store/questions.actions'

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss'],
})
export class QuestionCreateComponent implements OnInit {

  public questionForm = new FormGroup({
    content: new FormControl('', [Validators.required, Validators.maxLength(56)]),
  })

  constructor(
    private store: Store<AppState>,
  ) {
  }


  get content() {
    return this.questionForm.get('content')
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.store.dispatch(createQuestion({content: this.questionForm.value.content}))
  }
}
