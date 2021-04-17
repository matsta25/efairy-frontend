import { Component, OnInit } from '@angular/core'
import { ZodiacSign } from '../../models/zodiac-sign.model'
import { AppState } from '../../../../core/app-store/app-store.state'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { selectDailyHoroscope, selectHoroscopeZodiacSigns } from '../../store/horoscope.selectors'
import { Horoscope } from '../../models/horoscope.model'
import { clearDailyHoroscope, readDailyHoroscope } from '../../store/horoscope.actions'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-horoscope-daily',
  templateUrl: './horoscope-daily.component.html',
  styleUrls: ['./horoscope-daily.component.scss'],
})
export class HoroscopeDailyComponent implements OnInit {

  public zodiacSigns$: Observable<ZodiacSign[]>
  public horoscope$: Observable<Horoscope>

  public zodiacSignForm = new FormGroup({
    zodiacSign: new FormControl('', Validators.required),
  })

  constructor(
    private store: Store<AppState>,
  ) {
    this.zodiacSigns$ = store.pipe(select(selectHoroscopeZodiacSigns))
  }

  ngOnInit(): void {
    this.horoscope$ = this.store.pipe(select(selectDailyHoroscope))
  }

  public onSubmit(): void {
    this.store.dispatch(readDailyHoroscope({zodiacSign: this.zodiacSignForm.value.zodiacSign}))
  }

  public onTryAgain(): void {
    this.store.dispatch(clearDailyHoroscope())
  }
}
