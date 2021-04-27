import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { selectUserRoles } from '../../auth/store/auth.selectors'
import { AppState } from '../../app-store/app-store.state'
import { UserRoles } from '../../auth/model/jwt.model'
import { AnimationOptions } from 'ngx-lottie'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  public userRoles$: Observable<string[]>
  public userRoles = UserRoles
  public options: AnimationOptions = {
    path: '/assets/animations/rotating-blob.json',
  }

  constructor(
    private store: Store<AppState>,
  ) {
    this.userRoles$ = store.pipe(select(selectUserRoles))
  }
}
