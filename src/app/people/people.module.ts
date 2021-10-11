import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PeopleComponent } from './peopleComponent/people.component';




@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PeopleModule { }
