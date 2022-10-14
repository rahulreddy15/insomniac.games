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
import { SupportCardsComponentComponent } from './support-cards-component/support-cards-component.component';
import { FooterThreeComponent } from './footer-three/footer-three.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import { GamesFeaturedTitlesComponent } from './games-featured-titles/games-featured-titles.component';
import { GamesCurrentTitlesComponent } from './games-current-titles/games-current-titles.component';
import { GamesNewsComponent } from './games-news/games-news.component';
import { GamesLegacyComponent } from './games-legacy/games-legacy.component';
import { CareersOpportunitiesComponent } from './careers-opportunities/careers-opportunities.component';
import { CareersLifeAtComponent } from './careers-life-at/careers-life-at.component';
import { CareersBenefitsComponent } from './careers-benefits/careers-benefits.component';
import { CareersAwardsComponent } from './careers-awards/careers-awards.component';
import { CareersContactComponent } from './careers-contact/careers-contact.component';
import { NewsMainContentComponent } from './news-main-content/news-main-content.component';
import { NewsFeaturedArticleComponent } from './news-featured-article/news-featured-article.component';
import { NewsRecentComponent } from './news-recent/news-recent.component';
import { NewsCategoriesComponent } from './news-categories/news-categories.component';
import { CommunityJoinInComponent } from './community-join-in/community-join-in.component';
import { CommunityTwitchComponent } from './community-twitch/community-twitch.component';
import { CommunityNewsComponent } from './community-news/community-news.component';
import { CommunityFollowLatestComponent } from './community-follow-latest/community-follow-latest.component';

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
    VisionComponent,
    SupportCardsComponentComponent,
    FooterThreeComponent,
    ContactUsComponent,
    SignInComponent,
    GamesFeaturedTitlesComponent,
    GamesCurrentTitlesComponent,
    GamesNewsComponent,
    GamesLegacyComponent,
    CareersOpportunitiesComponent,
    CareersLifeAtComponent,
    CareersBenefitsComponent,
    CareersAwardsComponent,
    CareersContactComponent,
    NewsMainContentComponent,
    NewsFeaturedArticleComponent,
    NewsRecentComponent,
    NewsCategoriesComponent,
    CommunityJoinInComponent,
    CommunityTwitchComponent,
    CommunityNewsComponent,
    CommunityFollowLatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
