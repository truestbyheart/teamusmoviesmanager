import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DetailedViewComponent } from './components/detailed-view/detailed-view.component';
import { PreviewCastComponent } from './components/preview-cast/preview-cast.component';
import { DownloadSectionComponent } from './components/download-section/download-section.component';
import { SafePipe } from './safe.pipe';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TvDetaildeViewComponent } from './components/tv-detailde-view/tv-detailde-view.component';




const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent},
  {path: 'detailView/:id', component: DetailedViewComponent},
  {path: 'tv-detailed-view/:id', component: TvDetaildeViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailedViewComponent,
    PreviewCastComponent,
    DownloadSectionComponent,
    SafePipe,
    SideNavComponent,
    TvDetaildeViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
