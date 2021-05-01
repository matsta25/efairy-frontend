import { Component, OnInit } from '@angular/core'
import { StatusApiService } from '../../services/status-api.service'
import { HttpResponse } from '@angular/common/http'

export enum StatusEnum {
  UP = 'UP',
  DOWN = 'DOWN',
  UNKNOWN = 'UNKNOWN',
}

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

  public efairyServiceStatus = StatusEnum.UNKNOWN
  public horoscopeServiceStatus = StatusEnum.UNKNOWN
  public authorizationServiceStatus = StatusEnum.UNKNOWN

  constructor(
    private statusApiService: StatusApiService,
  ) {
  }

  ngOnInit(): void {
    this.getEfairyServiceStatus()
    this.getHoroscopeServiceStatus()
    this.getAuthorizationServiceStatus()
  }

  public getEfairyServiceStatus() {
    this.statusApiService.getEfairyServiceStatus().subscribe((data: {status: StatusEnum}) => {
      this.efairyServiceStatus = data.status
    })
  }

  public getHoroscopeServiceStatus() {
    this.statusApiService.getHoroscopeServiceStatus().subscribe((data: {status: StatusEnum}) => {
      this.horoscopeServiceStatus = data.status
    })
  }
  public getAuthorizationServiceStatus() {
    this.statusApiService.getAuthorizationServiceStatus().subscribe((data) => {
      this.authorizationServiceStatus = data.includes('html') ? StatusEnum.UP : StatusEnum.DOWN
    })
  }

  onRefresh() {
    this.ngOnInit()
  }
}
