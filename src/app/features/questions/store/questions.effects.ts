import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  createQuestion,
  createQuestionFail,
  createQuestionSuccess, readQuestion, readQuestionFail,
  readQuestions,
  readQuestionsFail,
  readQuestionsSuccess, readQuestionSuccess
} from './questions.actions'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { QuestionsApiService } from '../services/questions-api.service'
import { Question } from '../model/questions.model'
import { Router } from '@angular/router'

@Injectable()
export class QuestionsEffects {

  constructor(
    private questionsApiService: QuestionsApiService,
    private actions$: Actions,
    private router: Router,
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

  readQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readQuestion.type),
      mergeMap(({id}) => this.questionsApiService.readQuestion(id).pipe(
        map((question: Question) => ({
          type: readQuestionSuccess.type,
          question,
        })),
        catchError(() => of({
          type: readQuestionFail.type,
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
        tap(() => this.router.navigate(['/', 'questions', 'list'])),
        catchError(() => of({
          type: createQuestionFail.type,
        })),
      )),
    ),
  )
}
