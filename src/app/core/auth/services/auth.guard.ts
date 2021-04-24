import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AppState } from '../../app-store/app-store.state'
import { select, Store } from '@ngrx/store'
import { selectIsAuthenticated } from '../store/auth.selectors'
import { take } from 'rxjs/operators'
import { AuthApiService } from './auth-api.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  private isAuthenticated$: Observable<boolean>

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private authApi: AuthApiService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated))

    return this.checkLogin(state)
  }

  private checkLogin(state: RouterStateSnapshot): boolean {
    let isAuthenticated = false
    this.isAuthenticated$.pipe(take(1)).subscribe(value => isAuthenticated = value)

    if (!isAuthenticated) {
      this.authApi.redirectToKeycloak()
    }

    return isAuthenticated
  }
}
