import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayLangMenu:boolean;

  constructor(public _translateService: TranslateService){
    this.displayLangMenu = false;
  }

  ngOnInit(): void {

  }

  public showLangMenu(){
    this.displayLangMenu = true;
  }

  public hideLangMenu(){
    this.displayLangMenu = false;
  }

  public toggleLanguageMenu(){
    this.displayLangMenu = !this.displayLangMenu;
  }

  public chooseLanguage(languageCode:string){
    this._translateService.use(languageCode);
    localStorage.setItem("USER_LANG", languageCode);
    this.hideLangMenu();
    window.location.reload();
  }

}
