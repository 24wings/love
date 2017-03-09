import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Rest } from '../../providers/rest';
import { ToolService } from '../../providers/tool-service';
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
  record: any = {
    state: '',
    createDt: ''
  };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public rest: Rest,
    public tool: ToolService

  ) {
    var _id = localStorage.getItem('_id');
    this.rest.getMyCurrentRecord(_id)
      .subscribe(rtn => {
        if (rtn.issuccess) {
          this.record = rtn.data
        } else {
          this.tool.alertError(rtn.data);
        }
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatePage');
  }

}
