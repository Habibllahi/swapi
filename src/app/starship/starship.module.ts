import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StarshipComponent } from './starshipComponent/starship.component';



@NgModule({
  declarations: [
    StarshipComponent
  ],
  imports: [
    SharedModule
  ]
})
export class StarshipModule { }
