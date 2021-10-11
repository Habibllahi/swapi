import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './film/filmComponent/film.component';
import { PeopleComponent } from './people/peopleComponent/people.component';
import { PlanetComponent } from './planet/planetComponent/planet.component';
import { ShowComponent } from './shows/showComponent/show.component';
import { StarshipComponent } from './starship/starshipComponent/starship.component';

const routes: Routes = [
  {
    path: 'film',
    component: FilmComponent

  },
  {
    path: 'shows',
    component: ShowComponent

  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'planet',
    component: PlanetComponent
  },
  {
    path: 'starship',
    component: StarshipComponent
  },
  {
    path: '',
    redirectTo: 'shows',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
