import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { PreviewCastComponent } from './components/preview-cast/preview-cast.component';
import { SafePipe } from './safe.pipe';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TvDetaildeViewComponent } from './components/tv-detailde-view/tv-detailde-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { StarDetailsComponent } from './components/star-details/star-details.component';
import { FullCastComponent } from './components/full-cast/full-cast.component';

import { SliderModule } from 'angular-image-slider';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { TvPreviewCastComponent } from './components/tv-preview-cast/tv-preview-cast.component';
import { ReviewNPreviewComponent } from './components/review-n-preview/review-n-preview.component';
import { YoutubePipe } from './youtube.pipe';
import { BrowseComponent } from './components/browse/browse.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingComponent } from './animation/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadMoviesComponent } from './components/download-movies/download-movies.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DownloadSeriesComponent } from './components/download-series/download-series.component';




const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  {path: 'detailView/:id', component: DetailedViewComponent},
  {path: 'tv-detailed-view/:id', component: TvDetaildeViewComponent},
  {path: 'star-details/:id', component: StarDetailsComponent},
  {path: 'full-cast', component: FullCastComponent},
  {path: 'search/:name', component: SearchResultsComponent},
  {path: 'Browse/:page', component: BrowseComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailedViewComponent,
    PreviewCastComponent,
    SafePipe,
    SideNavComponent,
    TvDetaildeViewComponent,
    StarDetailsComponent,
    FullCastComponent,
    SearchResultsComponent,
    TvPreviewCastComponent,
    ReviewNPreviewComponent,
    YoutubePipe,
    BrowseComponent,
    LoadingComponent,
    FooterComponent,
    DownloadMoviesComponent,
    ContactusComponent,
    DownloadSeriesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    SliderModule,
    NgxSpinnerModule
  ],
  exports: [ RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
