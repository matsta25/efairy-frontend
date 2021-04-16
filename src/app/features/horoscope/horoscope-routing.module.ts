import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HoroscopeComponent } from './horoscope.component'
import { HoroscopeDailyComponent } from './components/horoscope-daily/horoscope-daily.component'


const routes: Routes = [
  {
    path: '',
    component: HoroscopeComponent,
    children: [
      {
        path: 'daily',
        component: HoroscopeDailyComponent,
      },
      {
        path: '',
        redirectTo: 'daily',
        pathMatch: 'full',
      },
    ],
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscopeRoutingModule { }
