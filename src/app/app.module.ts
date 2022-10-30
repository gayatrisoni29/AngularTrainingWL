import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarRatingPipe } from './pipes/star-rating.pipe';
import { LoginFormComponent } from './pw-1/login-form/login-form.component';
import { FilmComponentComponent } from './pw-1/filmdetails/film-component/film-component.component';
import { FilmSearchComponentComponent } from './pw-1/filmdetails/film-search-component/film-search-component.component';
import { NotFoundComponent } from './pw-1/filmdetails/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    StarRatingPipe,
    FilmComponentComponent,
    FilmSearchComponentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
