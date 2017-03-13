import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Rest } from '../../providers/rest';
import { ToolService } from '../../providers/tool-service';
import { AppConfig } from '../../providers/app-config';
import { TaskPage } from '../task/task';
/*
  Generated class for the State page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-state',
  templateUrl: 'state.html'
})
export class StatePage {
  player: any = {};
  currentRecord: any = {};
  toPlayer: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public rest: Rest,
    public tool: ToolService,
    public appConfig: AppConfig

  ) {
    var _id = localStorage.getItem('_id');
    this.http.get(this.appConfig.serverIp + 'player/state?_id=' + _id).subscribe(rtn => {
      const result = rtn.json();

      if (result.issuccess) {

        this.currentRecord = result.data.currentRecord;
        this.player = result.data.player;
        this.toPlayer = result.data.toPlayer;
      } else {
        alert(result.data);
      }
    });

  }

  beginTask() {
    this.navCtrl.push(TaskPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatePage');
  }

}
