import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { LoadingModule } from 'ngx-loading';
import { OMDBService } from './app.service';
import { CommonModule } from '@angular/common';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule, MatExpansionModule, MatSidenavModule, MatMenuModule,MatChipsModule,MatCardModule, MatGridListModule, MatIconModule, MatInputModule, MatTableModule,MatToolbarModule,MatAutocompleteModule} from '@angular/material';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoadingModule,
    MatMenuModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    InfiniteScrollModule,
    MatAutocompleteModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
    FlexLayoutModule,
    MatSidenavModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [OMDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }

