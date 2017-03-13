import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { AppConfig, ToolService, Rest } from '../../providers'
/*
  Generated class for the Task page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-task',
  templateUrl: 'task.html'
})
export class TaskPage {
  task: any = {};
  images: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public appConfig: AppConfig,
    public toolService: ToolService
  ) {
    this.http.get(this.appConfig.serverIp + 'task/getTask').subscribe(rtn => {
      const result = rtn.json();
      if (result.issuccess) {
        console.log(result);
        this.task = result.data;


      } else {
        alert(result.data);
      }
    });
  }

  addImage(file: File) {
    if (file) {
      let reader = new FileReader();
      reader.onload = (event) => {
        this.images.push(event.target['result']);
      };

      reader.readAsDataURL(file);

    } else {
      return;
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  finishTask() {
    this.task.isFinish = true;
    this.http.put(this.appConfig.serverIp + 'rest.task?_id' + this.task._id, this.task).subscribe(rtn => {
      const result = rtn.json();
      if (result.issuccess) {
        console.log(result);
      } else {
        this.toolService.alertError(result);
      }
    });
  }

}
