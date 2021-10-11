import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlanetComponent } from './planetComponent/planet.component';



@NgModule({
  declarations: [
    PlanetComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PlanetModule { }
