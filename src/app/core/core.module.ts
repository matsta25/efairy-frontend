import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { environment } from '../../environments/environment'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { appReducers } from './app-store/app-store.reducers'
import { appEffects } from './app-store/app-store.effects'

import { ErrorHandlerService } from './services/error-handler.service'
import { httpInterceptorProviders } from './interceptors'
import { ProgressComponent } from './components/progress/progress.component'
import { NgProgressModule } from 'ngx-progressbar'
import { NgProgressHttpModule } from 'ngx-progressbar/http'
import { metaReducers } from '../shared/store';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StatusComponent } from './components/status/status.component';
import { TermsComponent } from './components/terms/terms.component';
import { StatusPresentComponent } from './components/status/status-present.component'
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [
    ProgressComponent,
    AboutUsComponent,
    StatusComponent,
    TermsComponent,
    StatusPresentComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,

    //  ngrx
    StoreModule.forRoot(appReducers, {metaReducers}),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),

    // ngProgess
    NgProgressModule.withConfig({spinner: false}),
    NgProgressHttpModule,
  ],
  providers: [
    ...httpInterceptorProviders,
    {provide: ErrorHandler, useClass: ErrorHandlerService},
  ],
  exports: [
    ProgressComponent,
  ],
})

export class CoreModule {
}
