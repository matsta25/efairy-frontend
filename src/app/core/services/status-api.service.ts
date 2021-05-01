import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

const EFAIRY_ACTUATOR_HEALTH_ENDPOINT = '/efiary-actuator/health'

const HOROSCOPE_ACTUATOR_HEALTH_ENDPOINT = '/horoscope-actuator/health'

const AUTHORIZATION_ACTUATOR_HEALTH_ENDPOINT = '/auth/'

@Injectable({
  providedIn: 'root',
})
export class StatusApiService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getEfairyServiceStatus() {
    return this.http.get(`${EFAIRY_ACTUATOR_HEALTH_ENDPOINT}`)
  }

  public getHoroscopeServiceStatus() {
    return this.http.get(`${HOROSCOPE_ACTUATOR_HEALTH_ENDPOINT}`)
  }

  public getAuthorizationServiceStatus() {
    return this.http.get(`${AUTHORIZATION_ACTUATOR_HEALTH_ENDPOINT}`, { responseType: 'text' })
  }
}
