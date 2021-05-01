import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../../../core/app-store/app-store.state'
import { invokeImportHoroscope, invokeImportHoroscopeClear } from '../../store/admin.actions'
import { selectAdminResult } from '../../store/admin.selectors'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-horoscope-import',
  templateUrl: './horoscope-import.component.html',
  styleUrls: ['./horoscope-import.component.scss'],
})
export class HoroscopeImportComponent implements OnInit {

  public fileName = ''
  public result$: Observable<string>

  constructor(
    private store: Store<AppState>,
  ) {
    this.result$ = store.pipe(select(selectAdminResult))
  }

  ngOnInit(): void {
    this.store.dispatch(invokeImportHoroscopeClear())
  }

  onFileSelected(event) {
    const file: File = event.target.files[0]

    if (file) {
      this.fileName = file.name
      this.store.dispatch(invokeImportHoroscope({file}))
    }
  }

  onRefresh() {
    this.fileName = ''
    this.store.dispatch(invokeImportHoroscopeClear())
  }
}
