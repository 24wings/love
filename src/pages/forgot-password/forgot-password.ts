import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToolService } from '../../providers/tool-service';
import { FormPage } from '../form/form';
/*

*/
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordPage {
  public time = 0;
  user = { username: '', password: '', inputCode: '', getCode: '4453' };
  phoneReg = /^1[3-9]\d{9}$/;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toolService: ToolService) {
    this.autoGoFormPage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  timeoutCode() {
    this.time = 60;
    var timer = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }


  autoGoFormPage() {
    var phone = localStorage.getItem('phone');
    if (phone) {
      /**
       * 查看抽奖情况
       */

    } else {
      /**
       * 填写用户信息
       */
      this.navCtrl.push(FormPage);
    }

  }





  forgotPassword() {
    if (this.phoneReg.test(this.user.username) && this.user.getCode == this.user.inputCode) {

      // this.navCtrl.setRoot(HomePage);
    } else {
      var errorMsg = this.phoneReg.test(this.user.username) ? '验证码错误' : '请输入正确的手机号';
      this.toolService.alertError(errorMsg)
    }


  }

  getCode() {
    this.toolService.alertError('您的验证码是' + this.user.getCode);
    this.timeoutCode();
  }

}
