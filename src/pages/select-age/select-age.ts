import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the SelectAge page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-age',
  templateUrl: 'select-age.html'
})
export class SelectAgePage {
  user;
  optionAge = [
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectAgePage');
  }
  back() {
    if (this.user.age) {
      this.navCtrl.pop();
    }
  }
}
