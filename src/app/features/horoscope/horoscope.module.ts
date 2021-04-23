import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HoroscopeComponent } from './horoscope.component'
import { HoroscopeDailyComponent } from './components/horoscope-daily/horoscope-daily.component'
import { HoroscopeRoutingModule } from './horoscope-routing.module'
import { SharedModule } from '../../shared/shared.module'


@NgModule({
  declarations: [
    HoroscopeComponent,
    HoroscopeDailyComponent,
  ],
  imports: [
    CommonModule,
    HoroscopeRoutingModule,
    SharedModule,
  ],
})
export class HoroscopeModule {
}
