import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'

import { AppComponent } from './app.component'
import { HomeComponent } from './core/components/home/home.component'
import { HeaderComponent } from './core/components/header/header.component'
import { FooterComponent } from './core/components/footer/footer.component'
import { NotificationPageComponent } from './core/components/notification-page/notification-page.component'
import { AuthModule } from './core/auth/auth.module'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout'
import { LottieModule } from 'ngx-lottie'

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web')
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotificationPageComponent, // TODO: After creating PageHeaderComponent move it to declarations of CoreModule
  ],
    imports: [
        // angular
        BrowserModule,

        // material design
        BrowserAnimationsModule,

        // core & shared
        CoreModule,
        SharedModule,
        AuthModule,

        // app routing
        AppRoutingModule,
        FlexLayoutModule,

        LottieModule.forRoot({ player: playerFactory }),
    ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {
}
