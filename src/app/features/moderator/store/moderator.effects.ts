import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import {
  createModeratorAnswer,
  createModeratorAnswerFail,
  createModeratorAnswerSuccess,
  readModeratorQuestions,
  readModeratorQuestionsFail,
  readModeratorQuestionsSuccess
} from './moderator.actions'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Router } from '@angular/router'
import { ModeratorApiService } from '../services/moderator-api.service'
import { ModeratorQuestion } from '../model/moderator.model'

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
