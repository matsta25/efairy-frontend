import { Component, OnInit } from '@angular/core'
import { ZodiacSign } from '../../models/zodiac-sign.model'
import { AppState } from '../../../../core/app-store/app-store.state'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectDailyHoroscope, selectHoroscopeZodiacSigns } from '../../store/horoscope.selectors'
import { Horoscope } from '../../models/horoscope.model'
import { readDailyHoroscope } from '../../store/horoscope.actions'

@Component({
  selector: 'app-horoscope-daily',
  templateUrl: './horoscope-daily.component.html',
  styleUrls: ['./horoscope-daily.component.scss'],
})
export class HoroscopeDailyComponent implements OnInit {

  public zodiacSigns$: Observable<ZodiacSign[]>
  public horoscope$: Observable<Horoscope>

  constructor(
    private store: Store<AppState>,
  ) {
    this.zodiacSigns$ = store.pipe(select(selectHoroscopeZodiacSigns))
  }

  ngOnInit(): void {
    this.horoscope$ = this.store.pipe(select(selectDailyHoroscope))
    this.zodiacSigns$.subscribe(value => {
      this.store.dispatch(readDailyHoroscope({zodiacSign: value[0]}))
    })
  }
}
