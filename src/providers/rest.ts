import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig } from './app-config';
import { ToolService } from './tool-service';
import 'rxjs/add/operator/map';

/*
  Generated class for the Rest provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rest {

  constructor(public http: Http, public appConfig: AppConfig, public toolService: ToolService) {
    console.log('Hello Rest Provider');
  }

  /**
   * 参与活动
   */
  joinWeekRecord(_id: string) {
    this.http.get(this.appConfig.serverIp + 'player/joinWeekRecord').map(rtn => rtn.json())
      .subscribe(result => {
        if (result.issuccess) {
          console.log(result)
          this.toolService.alertError('成功报名参加')
        }

      });
  }

  getMyCurrentRecord(_id: String) {
    return this.http.get(this.appConfig.serverIp + 'player/currentRecord?_id=' + _id).map(rtn => rtn.json())

  }

}
