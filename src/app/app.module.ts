import { BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { PersonalTitleComponent } from './personal-title/personal-title.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { BookListComponent } from './book-list/book-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { IndexComponentComponent } from './index-component/index-component.component';
import { ContactComponent } from './contact/contact.component';
import { CertificationsComponent } from './certifications/certifications.component';

import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { CarouselModule } from 'primeng/carousel';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    AppHeaderComponent,
    AppMenuComponent,
    AppFooterComponent,
    PersonalTitleComponent,
    ContactInfoComponent,
    TechnicalSkillsComponent,
    SoftSkillsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    IndexComponentComponent,
    ContactComponent,
    CertificationsComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient]
        }
    }),
  ],
  providers: [
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    })])
  ],
  bootstrap: [AppComponent],
  exports:[
    TranslateModule
  ]
})
export class AppModule { }
