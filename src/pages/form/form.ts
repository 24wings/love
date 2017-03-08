import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
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
  phoneRegex = /^1[3-9]\d{9}$/;
  user = {
    username: 'yang',
    gender: '男',
    phone: '13212780816',
    password: '123',
    tags: [{
      tagName: '我的社交名片',
      options: [
        "文艺青年",
        "普通青年",
        "有为青年",
        "2B青年",
        "学生",
        "IT民工",
        "自由职业者",
        "上班族",
        "潜力股",
        "创业者",
        "技术宅",
        "小清新",
        "月光族",
        "乐活族",
        "愤青",
        "正太",
        "萝莉",
        "外貌协会"
      ],
      result: ['文艺青年']
    }, {
      tagName: '我的兴趣爱好',
      options: ["K歌", "旅行", "果粉", "购物狂", "美食", "电影", "摄影", "游戏", "手机控", "读书", "动漫", "爱狗", "爱猫", "运动", "电视剧", "桌游"],
      result: ['K歌']
    }, {
      tagName: '我的个性',
      result: ['成熟'],
      options: [
        "成熟",
        "各种宅",
        "幽默",
        "爱时尚",
        "执着",
        "温柔",
        "直率",
        "闷骚",
        "善良",
        "低调",
        "自由",
        "阳光",
        "乐观",
        "完美主义",
        "强迫症",
        "自信",
        "萌萌哒"
      ]
    }, {
      tagName: '我现在的状态',
      result: [
        '起床困难户'
      ],
      options: [
        "起床困难户",
        "奋斗ing",
        "加班ing",
        "学习ing",
        "减肥ing",
        "寂寞ing",
        "缺爱ing",
        "成长ing"
      ]
    }, {
      tagName: '我的口头语',
      result: ['Word天'],
      options: [
        "Word天",
        "猴赛雷",
        "厉害了",
        "我也是醉了",
        "你咋不上天嘞",
        "蓝瘦香菇",
        "洪荒之力",
        "小目标",
        "宝宝委屈",
        "撩妹 / 撩汉",
        "感觉身体被掏空",
        "画面太美不敢看带我装逼带我飞",
        "吓死宝宝了",
        "开黑",
        "老司机"
      ]
    }, {
      tagName: '我的超能力（ 牛逼的人生无须解释）',
      result: ['舌头打桃结'],
      options: [
        "舌头打桃结",
        "记忆力超强",
        "过目不忘",
        "力大无穷",
        "晒不黑",
        "狂吃不胖",
        "没生过病",
        "睁眼睡觉",
        "耳朵能动",
        "一字马",
        "单个眉毛动",
        "舌头舔鼻子",
        "对眼",
        "口吞拳头",
        "长时憋气"
      ]
    }, {
      tagName: '我的业余时间安排',
      result: ['王者荣耀'],
      options: [
        "王者荣耀",
        "英雄联盟",
        "看书",
        "篮球",
        "手机",
        "电影",
        "音乐",
        "涨知识",
        "逛街",
        "健身",
        "约好友",
        "旅行",
        "娱乐八卦"
      ]
    }],

    age: 18,
    height: 175,

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


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public http: Http,
    public alertCtrl: AlertController
  ) {
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

  checkRegister(): boolean {
    var result = true;
    var notNull = [
      this.user.username,
      this.user.gender,
      this.user.age,
      this.user.height,
      this.user.password,
      this.user.phone
    ];
    notNull.forEach(item => item ? '' : result = false);
    this.user.tags.forEach(tag => tag.result.length > 0 ? '' : result = false);


    return result;
  }

  registe() {
    if (this.checkRegister()) {
      this.phoneRegex.test(this.user.phone) ? this.sendRegisteRequest() : this.alertError('请填写合法的手机号');


    } else {
      this.alertError('您离填写完表单还有一小段距离哦')

    }
  }



  sendRegisteRequest() {
    this.http.post('http://localhost:3000/rest.player', this.user).subscribe(rtn => {
      var result = rtn.json();
      if (result.issuccess) {
        /**
         * 自动进入下一个报名通知页面
         */
        console.log(result);
        this.sendPostRequest(result.data._id);

      } else {
        this.alertError(result.data);
      }
    });
  }

  sendPostRequest(_id: String) {
    this.http.get('http://localhost:3000/record/newRecord?_id=' + _id).subscribe(rtn => {
      const result = rtn.json();
      if (result.issuccess) {
        console.log(result);
      } else {
        alert(result);
      }
    });


  }

  alertError(errorMsg, timeout = 3000) {
    var error = this.alertCtrl.create({
      title: '温馨提示',
      subTitle: errorMsg,
      buttons: ['确定']
    });
    error.present();
    setTimeout(function () {
      error.dismiss()
    }, timeout);


  }

}
