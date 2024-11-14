import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');

    const userLanguage = localStorage.getItem('USER_LANG');
    if(userLanguage !== null && userLanguage.trim() !== ''){
      this.translate.use(userLanguage);
    }else{
      this.translate.use('en');
    }
  }


}
