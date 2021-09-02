import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { 
  AccueilComponent,
  BibliothequeComponent,
} from './components/index';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpotifyAppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AlbumService } from './components/shared/album.service';
import { RechercheComponent } from './components/recherche.component';
import { ArtisteComponent } from './components/artiste.component';
import { TagDialogComponent } from './tag/tagdialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SpotifyAppComponent,
    AccueilComponent,
    NavBarComponent,
    BibliothequeComponent,
    RechercheComponent,
    ArtisteComponent,
    TagDialogComponent
  ],
  providers: [
    AlbumService
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  bootstrap: [SpotifyAppComponent]
})

export class AppModule { }
