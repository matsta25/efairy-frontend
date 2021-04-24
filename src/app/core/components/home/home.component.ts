import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { selectUserRoles } from '../../auth/store/auth.selectors'
import { AppState } from '../../app-store/app-store.state'
import { UserRoles } from '../../auth/model/jwt.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  public userRoles$: Observable<string[]>
  public userRoles = UserRoles

  constructor(
    private store: Store<AppState>,
  ) {
    this.userRoles$ = store.pipe(select(selectUserRoles))
  }
}
