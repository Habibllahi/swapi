import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleModule } from './people/people.module';
import { PlanetModule } from './planet/planet.module';
import { StarshipModule } from './starship/starship.module';
import { SharedModule } from './shared/shared.module';
import { ShowsModule } from './shows/shows.module';
import { FilmModule } from './film/film.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    PeopleModule,
    PlanetModule,
    StarshipModule,
    ShowsModule,
    FilmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
