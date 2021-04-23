import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

const QUESTIONS_API_ENDPOINT = '/question'

@Injectable({
  providedIn: 'root',
})
export class QuestionsApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public readQuestions() {
    return this.http.get(`${environment.baseUrl}${QUESTIONS_API_ENDPOINT}`)
  }

  public createQuestion(content: string) {
    return this.http.post(`${environment.baseUrl}${QUESTIONS_API_ENDPOINT}`, { questionContent: content })
  }
}
