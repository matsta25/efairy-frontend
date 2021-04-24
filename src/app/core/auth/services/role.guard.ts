import { Injectable } from '@angular/core'
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { selectUserRoles } from '../store/auth.selectors'
import { AppState } from '../../app-store/app-store.state'
import { AuthApiService } from './auth-api.service'
import { NotificationBarService } from '../../../shared/services/notification-bar.service'

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  public userRoles$: Observable<string[]>

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private notificationBarService: NotificationBarService
  ) {
    this.userRoles$ = store.pipe(select(selectUserRoles))
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const expectedRole = route.data.expectedRole

    let userRolesLocal: string[] = null
    this.userRoles$.subscribe(userRoles => userRolesLocal = userRoles)

    if (!userRolesLocal.includes(expectedRole)) {
      this.router.navigate(['/'])
      this.notificationBarService.showInfo('403 - Brak uprawnień.')
      return false
    }

    return true
  }
}
