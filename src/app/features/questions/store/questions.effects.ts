import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  createQuestion,
  createQuestionFail,
  createQuestionSuccess,
  readQuestions,
  readQuestionsFail,
  readQuestionsSuccess
} from './questions.actions'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'
import { QuestionsApiService } from '../services/questions-api.service'
import { Question } from '../model/questions.model'

@Injectable()
export class QuestionsEffects {

  constructor(
    private questionsApiService: QuestionsApiService,
    private actions$: Actions,
  ) {
  }

  readQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readQuestions.type),
      mergeMap(() => this.questionsApiService.readQuestions().pipe(
        map((questions: Question[]) => ({
          type: readQuestionsSuccess.type,
          questions,
        })),
        catchError(() => of({
          type: readQuestionsFail.type,
        })),
      )),
    ),
  )

  createQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createQuestion.type),
      mergeMap(({ content }) => this.questionsApiService.createQuestion(content).pipe(
        map(() => ({
          type: createQuestionSuccess.type,
        })),
        catchError(() => of({
          type: createQuestionFail.type,
        })),
      )),
    ),
  )
}
