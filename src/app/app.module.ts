import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { SoftKillsComponent } from './soft-kills/soft-kills.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { IndexComponentComponent } from './index-component/index-component.component';

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
    SoftKillsComponent,
    SoftSkillsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
    IndexComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
