import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the BeautyProjects page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-beauty-projects',
  templateUrl: 'beauty-projects.html'
})
export class BeautyProjectsPage {
  beautys = [{
    part: "脸部",
    projects: ["丰唇", "睫毛", "隆鼻", "美白"]
  }, {
    part: "腰部",
    projects: ["隆胸", "去毛", "滋润", "拉皮", "吸脂"]
  }, {
    part: "腿部",
    projects: ["拉伸", "瘦腿", "吸脂", "去毛"]
  }];
  data = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BeautyProjectsPage');
  }

  back() {
    this.navCtrl.pop();
  }

}
