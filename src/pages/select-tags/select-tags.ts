import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the SelectTags page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-select-tags',
  templateUrl: 'select-tags.html'
})
export class SelectTagsPage {
  data: any = {
    user: {},
    tag: {}
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectTagsPage');
  }

  back() {

  }
  hasTag(option, tagName) {
    console.log(this.data.user.tags, tagName);
    var tag = this.data.user.tags.find(tag => {
      return tag.tagName == tagName;
    });
    console.log(tag);


  }

  getColor(i: number) {
    i = i % 5;
    console.log(i);
    switch (i) {
      case 0:
        return 'secondary';
      case 1:
        return 'danger';
      case 2:
        return 'dark';
      case 3:
        return 'light';
      case 4:
        return 'primary';
    }
  }

  toggleTag(tag: string) {
    /**
     * 如果没有该标签
     */
    if (this.data.user.tags[this.data.tag.tagName].indexOf(tag) == -1) {
      this.data.user.tags[this.data.tag.tagName].push(tag);

    }

  }

  deleteTag(tag: string) {
    if (this.data.user.tags[this.data.tag.tagName].indexOf(tag) == -1) {
      var index = this.data.user.tags[this.data.tag.tagName].indexOf(tag);
      this.data.user.tags[this.data.tag.tagName].splice(index, 1);

    }
  }


}
