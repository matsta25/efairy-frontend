import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthRoutingModule } from './auth-routing.module'
import { SharedModule } from '../../shared/shared.module'
import { AuthRedirectUrlComponent } from './components/auth-redirect-url/auth-redirect-url.component'


@NgModule({
  declarations: [
    AuthRedirectUrlComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
})
export class AuthModule {
}
