import { Component, OnDestroy, OnInit } from '@angular/core'
import { ZODIAC_SIGNS, ZodiacSign } from '../../models/zodiac-sign.model'
import { AppState } from '../../../../core/app-store/app-store.state'
import { select, Store } from '@ngrx/store'
import { Observable, Subscriber, Subscription } from 'rxjs'
import { selectDailyHoroscope, selectHoroscopeZodiacSigns } from '../../store/horoscope.selectors'
import { Horoscope } from '../../models/horoscope.model'
import { clearDailyHoroscope, readDailyHoroscope } from '../../store/horoscope.actions'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { fadeInAnimation, fadeOutAnimation, flashAnimation } from 'angular-animations'

@Component({
  selector: 'app-horoscope-daily',
  templateUrl: './horoscope-daily.component.html',
  styleUrls: ['./horoscope-daily.component.scss'],
  animations: [
    flashAnimation({ anchor: 'flash', duration: 3000, delay: 3000 }),
  ],
})
export class HoroscopeDailyComponent implements OnInit, OnDestroy {

  public zodiacSigns$: Observable<ZodiacSign[]>
  public zodiacSignsSorted: ZodiacSign[] = []
  public horoscope$: Observable<Horoscope>
  public animState: Observable<boolean>
  public actualImgPath = 'assets/zodiacSigns/taurus.png'
  private subscription: Subscription = new Subscription()

  public zodiacSignForm = new FormGroup({
    zodiacSign: new FormControl('', Validators.required),
  })

  constructor(
    private store: Store<AppState>,
  ) {
    this.zodiacSigns$ = store.pipe(select(selectHoroscopeZodiacSigns))
  }

  ngOnInit(): void {
    this.store.dispatch(clearDailyHoroscope())
    this.horoscope$ = this.store.pipe(select(selectDailyHoroscope))
    this.subscription.add(
      this.zodiacSigns$.subscribe(zodiacSigns => {
        if (zodiacSigns.length > 0) {
          this.zodiacSignsSorted = [...zodiacSigns].sort(this.compareFn())
        }
      }),
    )

    this.animState = new Observable<boolean>((subscriber: Subscriber<boolean>) => subscriber.next(false))
  }

  public onSubmit(): void {
    this.store.dispatch(readDailyHoroscope({zodiacSign: this.zodiacSignForm.value.zodiacSign}))
  }

  public onTryAgain(): void {
    this.store.dispatch(clearDailyHoroscope())
    this.zodiacSignForm.reset()
  }

  private compareFn() {
    return (a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public getZodiacSignValueByName(zodiacSign: string): string {
    return ZODIAC_SIGNS.find(o => o.name === zodiacSign).value
  }

  public getRandomZodiacSignValue(): string {
    const rand = Math.floor(Math.random() * Object.keys(ZODIAC_SIGNS).length)
    return ZODIAC_SIGNS[Object.keys(ZODIAC_SIGNS)[rand]].value
  }

  animDone() {
    let oldState = null
    this.animState.subscribe((animState) => oldState = animState )
    this.animState = new Observable<boolean>((subscriber: Subscriber<boolean>) => {
      subscriber.next(!oldState)
      setTimeout(() => {
        this.actualImgPath = 'assets/zodiacSigns/' + this.getRandomZodiacSignValue() + '.png'
      },5000)
    })
  }
}
