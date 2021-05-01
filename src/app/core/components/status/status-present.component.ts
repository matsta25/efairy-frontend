import { Component, Input } from '@angular/core'
import { StatusEnum } from './status.component'

@Component({
  selector: 'app-status-present',
  template: `
    <span *ngIf="status === StatusEnum.UNKNOWN" class="badge rounded-pill bg-primary">Unknown</span>
    <span *ngIf="status === StatusEnum.UP" class="badge rounded-pill bg-success">Up</span>
    <span *ngIf="status === StatusEnum.DOWN" class="badge rounded-pill bg-danger">Down</span>
  `,
  styles: [],
})
export class StatusPresentComponent {
  @Input() status: StatusEnum
  public StatusEnum = StatusEnum
}
