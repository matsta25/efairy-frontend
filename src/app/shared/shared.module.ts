import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MaterialModule } from './material.module'

import { sharedInterceptorProviders } from './interceptors'
import { BackButtonDirective } from './directives/back-button.directive'
import { InputDebounceDirective } from './directives/input-debounce.directive'
import { UnsavedChangesGuard } from './services/unsaved-changes.guard'
import { NotificationBarComponent } from './components/notification-bar/notification-bar.component'
import { PageHeaderComponent } from './components/page-header/page-header.component'
import { PageHeaderBackComponent } from './components/page-header-back/page-header-back.component'
import { PageHeaderTitleComponent } from './components/page-header-title/page-header-title.component'
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component'
import { UnixToUtcPipe } from './pipes/unix-to-utc.pipe'
import { ReactiveFormsModule } from '@angular/forms'
import { TruncatePipe } from './pipes/truncate.pipe'


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [
    BackButtonDirective,
    InputDebounceDirective,
    NotificationBarComponent,
    ConfirmDialogComponent,
    PageHeaderComponent,
    PageHeaderBackComponent,
    PageHeaderTitleComponent,
    UnixToUtcPipe,
    TruncatePipe,
  ],
  entryComponents: [
    NotificationBarComponent,
    ConfirmDialogComponent,
  ],
  providers: [
    ...sharedInterceptorProviders,
    UnsavedChangesGuard,
  ],
  exports: [
    MaterialModule,
    BackButtonDirective,
    InputDebounceDirective,
    PageHeaderComponent,
    PageHeaderBackComponent,
    PageHeaderTitleComponent,
    UnixToUtcPipe,
    ReactiveFormsModule,
    TruncatePipe,
  ],
})

export class SharedModule {
}
