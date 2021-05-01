import { ErrorHandler, Injectable } from '@angular/core'
import { LoggerService } from './logger.service'
import { environment } from '../../../environments/environment'

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor(private loggerService: LoggerService) {
    super()
  }

  public handleError(error: any) {
    if (environment.production) {
      this.loggerService.logError(error)
    }

    if(error.url !== 'http://localhost:8083/auth/') {
      super.handleError(error)
    }
  }
}
