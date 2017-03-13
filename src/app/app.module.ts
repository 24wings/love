import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToolService } from '../providers/tool-service';
import { AppConfig } from '../providers/app-config';
import { Rest } from '../providers/rest';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { FormPage } from '../pages/form/form';
import { SelectAgePage } from '../pages/select-age/select-age';
import { SelectHeightPage } from '../pages/select-height/select-height';
import { SelectTagsPage } from '../pages/select-tags/select-tags';
import { StatePage } from '../pages/state/state';
import { TaskPage } from '../pages/task/task';

@NgModule({
  declarations: [
    MyApp,
    ForgotPasswordPage,
    FormPage,
    SelectAgePage,
    SelectHeightPage,
    SelectTagsPage,
    StatePage,
    TaskPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      backButtonIcon: 'arrow-back'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ForgotPasswordPage,
    FormPage,
    SelectAgePage,
    SelectHeightPage,
    SelectTagsPage,
    StatePage,
    TaskPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ToolService, AppConfig, Rest]
})
export class AppModule { }
