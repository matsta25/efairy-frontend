import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

const QUESTIONS_API_ENDPOINT = '/question'

@Injectable({
  providedIn: 'root',
})
export class ModeratorApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public readModeratorQuestions() {
    return this.http.get(`${environment.baseUrl}${QUESTIONS_API_ENDPOINT}`)
  }

  public readModeratorQuestion(id: number) {
    return this.http.get(`${environment.baseUrl}${QUESTIONS_API_ENDPOINT}/${id}`)
  }

  public createModeratorAnswer(id: number, content: string) {
    return this.http.post(`${environment.baseUrl}${QUESTIONS_API_ENDPOINT}/${id}/answer`, content)
  }
}
