import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { BeautyProjectsPage } from '../beauty-projects/beauty-projects';

/*
  Generated class for the TreatDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-treat-detail',
  templateUrl: 'treat-detail.html'
})
export class TreatDetailPage {
  data;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.data = this.navParams.data;
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TreatDetailPage');
    console.log(this.data);
  }


  addImage(imageSelect: HTMLInputElement) {
    var file = imageSelect.files[0];
    if (!file) {
      return 0;
    }

    var reader = new FileReader();
    reader.onload = event => {
      var result = event.target['result'];
      this.data.images = this.data.images ? this.data.images : [];
      this.data.images.push(result);

    }

    reader.readAsDataURL(file);
  }

  selectProject() {
    this.modalCtrl.create(BeautyProjectsPage, this.data).present();
  }

  debug() {
    console.log(this.data);
  }

  toCure() {
    this.navCtrl.pop();
  }
}
