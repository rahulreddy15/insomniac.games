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
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoEmbedComponent } from './video-embed/video-embed.component';
import { CardsComponentComponent } from './cards-component/cards-component.component';
import { FeaturedComponent } from './featured/featured.component';
import { VisionComponent } from './vision/vision.component';

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
    FooterTwoComponent,
    VideoEmbedComponent,
    CardsComponentComponent,
    FeaturedComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
