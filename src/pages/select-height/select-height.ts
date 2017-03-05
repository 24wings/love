import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SelectHeight page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-height',
  templateUrl: 'select-height.html'
})
export class SelectHeightPage {
  user;
  optionHeight = [

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (var i = 150; i <= 190; i++) {
      this.optionHeight.push(i);
    }
    this.user = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectHeightPage');
  }

  back() {
    this.navCtrl.pop();
  }

}
