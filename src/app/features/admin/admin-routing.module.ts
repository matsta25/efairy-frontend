import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from '../../core/auth/services/auth.guard'
import { RoleGuard } from '../../core/auth/services/role.guard'
import { UserRoles } from '../../core/auth/model/jwt.model'
import { AdminComponent } from './admin.component'
import { HoroscopeImportComponent } from './components/horoscope-import/horoscope-import.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'horoscope-import',
        component: HoroscopeImportComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: UserRoles.ADMIN,
        },
      },
      {
        path: '',
        redirectTo: 'horoscope-import',
        pathMatch: 'full',
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
