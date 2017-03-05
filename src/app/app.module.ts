import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ToolService } from '../providers/tool-service';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { FormPage } from '../pages/form/form';
import { SelectAgePage } from '../pages/select-age/select-age';
import { SelectHeightPage } from '../pages/select-height/select-height';
import { SelectTagsPage } from '../pages/select-tags/select-tags';
@NgModule({
  declarations: [
    MyApp,
    ForgotPasswordPage,
    FormPage,
    SelectAgePage,
    SelectHeightPage,
    SelectTagsPage
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
    SelectTagsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ToolService]
})
export class AppModule { }
