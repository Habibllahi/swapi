import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FilmComponent } from './filmComponent/film.component';



@NgModule({
  declarations: [
    FilmComponent
  ],
  imports: [
    SharedModule
  ]
})
export class FilmModule { }
