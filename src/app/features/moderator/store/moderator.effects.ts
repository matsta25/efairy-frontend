import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  createModeratorAnswer,
  createModeratorAnswerFail,
  createModeratorAnswerSuccess, readModeratorQuestion, readModeratorQuestionFail,
  readModeratorQuestions,
  readModeratorQuestionsFail,
  readModeratorQuestionsSuccess, readModeratorQuestionSuccess
} from './moderator.actions'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Router } from '@angular/router'
import { ModeratorApiService } from '../services/moderator-api.service'
import { ModeratorQuestion } from '../model/moderator.model'
import { readQuestion, readQuestionFail, readQuestionSuccess } from '../../questions/store/questions.actions'
import { Question } from '../../questions/model/questions.model'

@Injectable()
export class ModeratorEffects {

  constructor(
    private moderatorApiService: ModeratorApiService,
    private actions$: Actions,
    private router: Router,
  ) {
  }

  readModeratorQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readModeratorQuestions.type),
      mergeMap(() => this.moderatorApiService.readModeratorQuestions().pipe(
        map((response: ModeratorQuestion[]) => ({
          type: readModeratorQuestionsSuccess.type,
          moderatorQuestions: response,
        })),
        catchError(() => of({
          type: readModeratorQuestionsFail.type,
        })),
      )),
    ),
  )

  readModeratorQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readModeratorQuestion.type),
      mergeMap(({id}) => this.moderatorApiService.readModeratorQuestion(id).pipe(
        map((moderatorQuestion: ModeratorQuestion) => ({
          type: readModeratorQuestionSuccess.type,
          moderatorQuestion,
        })),
        catchError(() => of({
          type: readModeratorQuestionFail.type,
        })),
      )),
    ),
  )

  createModeratorAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createModeratorAnswer.type),
      mergeMap(({ id ,content }) => this.moderatorApiService.createModeratorAnswer(id, content).pipe(
        map(() => ({
          type: createModeratorAnswerSuccess.type,
        })),
        tap(() => this.router.navigate(['/', 'moderator', 'questions-list'])),
        catchError(() => of({
          type: createModeratorAnswerFail.type,
        })),
      )),
    ),
  )
}
