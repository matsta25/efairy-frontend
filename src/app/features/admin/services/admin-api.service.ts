import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

const BATCH_API_ENDPOINT = '/batch'
const INVOKE_IMPORT_HOROSCOPE_ENDPOINT = '/invoke-import-horoscope'

@Injectable({
  providedIn: 'root',
})
export class AdminApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public invokeImportHoroscope(file: File) {
    const formData = new FormData()
    formData.append('file', file)
    return this.http.post(`${environment.baseUrl}${BATCH_API_ENDPOINT}${INVOKE_IMPORT_HOROSCOPE_ENDPOINT}`,
      formData,
      {responseType: 'text'})
  }
}
