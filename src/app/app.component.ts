import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'
import { select, Store } from '@ngrx/store'
import { SharedState } from './shared/store/shared.state'
import { checkIsOnline } from './shared/store/shared.actions'
import { RouterHistoryService } from './shared/services/router-history.service'
import { Observable } from 'rxjs'
import { selectIsDarkMode } from './shared/store/shared.selectors'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public isDarkTheme$: Observable<boolean>

  constructor(private store: Store<SharedState>, private router: Router, private routerHistory: RouterHistoryService) {
    store.dispatch(checkIsOnline())
    this.isDarkTheme$ = store.pipe(select(selectIsDarkMode))
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe((evt: NavigationEnd) => this.routerHistory.push(evt.url))
  }
}
