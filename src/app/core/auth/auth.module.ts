import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AuthRoutingModule } from './auth-routing.module'
import { SharedModule } from '../../shared/shared.module'
import { AuthRedirectUrlComponent } from './components/auth-redirect-url/auth-redirect-url.component'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { JwtInterceptor } from './services/jwt.interceptor'


@NgModule({
  declarations: [
    AuthRedirectUrlComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
})
export class AuthModule {
}
