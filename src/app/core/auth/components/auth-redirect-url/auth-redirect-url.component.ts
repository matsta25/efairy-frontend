import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AppState } from '../../../app-store/app-store.state'
import { Store } from '@ngrx/store'
import { authenticate } from '../../store/auth.actions'
import { environment } from '../../../../../environments/environment'

@Component({
  selector: 'app-auth-redirect-url',
  templateUrl: './auth-redirect-url.component.html',
  styleUrls: ['./auth-redirect-url.component.scss'],
})
export class AuthRedirectUrlComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(authenticate({
      authenticateRequestModel: {
        grant_type: 'client_credentials',
        client_id: environment.CLIENT_ID,
        client_secret: environment.CLIENT_SECRET,
        code: this.route.snapshot.queryParams.code,
      },
    }))
  }
}
