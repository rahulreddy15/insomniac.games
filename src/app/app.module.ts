import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { CommunityComponent } from './community/community.component';
import { SupportComponent } from './support/support.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterOneComponent } from './footer-one/footer-one.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    CareersComponent,
    NewsComponent,
    CommunityComponent,
    SupportComponent,
    NavBarComponent,
    FooterOneComponent,
    FooterTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
