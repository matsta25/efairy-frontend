import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthRedirectUrlComponent } from './components/auth-redirect-url/auth-redirect-url.component'

const routes: Routes = [
  {
    path: 'auth-redirect-url',
    component: AuthRedirectUrlComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
