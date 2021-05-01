import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-routing.module'
import { AdminComponent } from './admin.component'
import { SharedModule } from '../../shared/shared.module'
import { HoroscopeImportComponent } from './components/horoscope-import/horoscope-import.component'


@NgModule({
  declarations: [
    AdminComponent,
    HoroscopeImportComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
})
export class AdminModule {
}
