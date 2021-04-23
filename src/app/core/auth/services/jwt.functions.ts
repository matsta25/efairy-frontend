import { JwtModel } from '../model/jwt.model'
import jwtDecode from 'jwt-decode'

export function decodeToken(token: string): JwtModel {
  return jwtDecode(token)
}

export function isExpired(exp: number) {
  return Date.now() >= exp * 1000
}

export function expTime(token: string, onlySec: boolean = false) {
  const exp = decodeToken(token).exp
  const sec = Math.round(((exp * 1000) - Date.now()) / 1000)
  const min = Math.round(sec / 60)
  return onlySec ? sec + 'sec' : sec + 'sec' + ' [' + min + 'min]'
}
