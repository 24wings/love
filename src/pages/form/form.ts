import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { SelectAgePage } from '../select-age/select-age';
import { SelectHeightPage } from '../select-height/select-height';
import { SelectTagsPage } from '../select-tags/select-tags';
import { Http } from '@angular/http';
/*

  姓名【单行文本】（输入数字或者字母无效，只可输入2到4个汉字）
性别【单选】
所在城市【下拉列表，顶部为搜索框，参考淘宝收货地址选择】（描述：目前学习或者工作的地方）
年龄【下拉列表，18—30岁，下拉列表，顶部为搜索框，参考淘宝收货地址选择】
学校【单行文本】（描述：填写学校全称，已毕业的填写毕业院校）。
身高【下拉列表，150—190，下拉列表，顶部为搜索框，参考淘宝收货地址选择】
微信二维码名片【上传图片】（描述：请上传您的微信二维码名片，用于CP配对，退出表单后	之前填写的资料会保存哒！再次进入继续填写！）
*/
@Component({
  selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormPage {
  user = {
    gender: '男',
    tags: {},

    anwsers: [{
      question: "我看过的一部深有感触的电影",
      value: '曾经看过《初恋50次》，很轻松很浪漫，温馨感动、每天都有激情，每天都是新鲜的，虽然余生都只能靠记忆延续，但生命因此而充实。'
    }, {
      question: "最近爱听的一首歌",
      value: "最近特别爱听《凉凉》，大爱古风，歌词好美，最爱那句“若回忆终不能相认，就让情分落九尘”"
    }, {
      question: "心中男神/女神",
      value: "有一种相遇，一眼凝神，便是永恒；有一种心动，一生一次，只为一人，胡歌无可替代。"
    }, {
      question: "曾经看过的一本书",
      value: "曾经看过《我心深处》，觉得世界很可悲，但人总要创造点什么价值来，虽然没什么用，但总是要活下去！"
    }, {
      question: "心目中理想的Ta",
      value: "希望他是一个有趣的人，能和我来一次灵魂深处的交流！"
    }, {
      question: "我的爱情宣言",
      value: "不忘初心，方得始终"
    },
    {
      question: "为什么想参加恋爱体验站活动?",
      value: "相遇就是一场缘分，希望通过这种奇妙的相遇，谈一场不分手的恋爱！"
    }
    ],
    filterAge: {
      label: '比自己大',
      value: 'old'
    },

    filterGender: {
      label: '异性恋',
      value: 'different'
    },

    filterCity: {
      label: '同城恋爱',
      value: 'sameCity'
    }
  };
  tags = [];

  filterAge = {
    options: [{
      label: '比自己大',
      value: 'old'
    }, {
      label: '比自己小',
      value: 'small'
    }, {
      label: '都可以',
      value: 'both'
    }]
  };

  filterGender = {
    options: [{
      label: '异性恋',
      value: 'different'
    },
    {
      label: '同性恋',
      value: 'same'
    },
    {
      label: '都可以',
      value: 'both'
    }
    ]
  };
  filterCity = {
    options: [{
      label: '同城恋爱',
      value: 'sameCity'
    }, {
      label: '异地恋',
      value: 'differentCity'
    }, {
      label: '都可以',
      value: 'both'
    }]
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: Http) {
    this.http.get('/assets/data/tags.json').map(res => res.json())
      .subscribe(rtn => {
     
        this.tags = rtn;
        rtn.forEach(tag => {
          this.user.tags[tag.tagName] = [];
        })
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  selectAge() {
    this.modalCtrl.create(SelectAgePage, this.user).present();
  }

  selectHeight() {
    this.modalCtrl.create(SelectHeightPage, this.user).present();
  }

  selectTags(tag) {
    this.navCtrl.push(SelectTagsPage, { user: this.user, tag: tag });
  }

  debugUser() {
    console.log(this.user);
  }

}
