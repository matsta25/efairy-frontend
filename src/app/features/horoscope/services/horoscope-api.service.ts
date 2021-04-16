import { Injectable } from '@angular/core'
import { ZodiacSign } from '../models/zodiac-sign.model'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../../environments/environment'

const HOROSCOPE_API_ENDPOINT = '/horoscope'

@Injectable({
  providedIn: 'root',
})
export class HoroscopeApiService {

  constructor(private http: HttpClient) {
  }

  public readHoroscope(zodiacSign: ZodiacSign) {
    const params = new HttpParams()
      .set('zodiacSign', zodiacSign.value)

    return this.http.get(`${environment.baseUrl}${HOROSCOPE_API_ENDPOINT}`, {params})
  }
}
