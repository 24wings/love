import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ToolService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ToolService {

  constructor(public http: Http, public alertCtrl: AlertController) {
    console.log('Hello ToolService Provider');
  }

  alertError(errorMsg: string, time: number = 2000) {
    this.alertCtrl.create({
      title: "提示",
      subTitle: errorMsg,
      buttons: ['确定']
    }).present();
  }

}
