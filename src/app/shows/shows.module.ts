import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ShowComponent } from './showComponent/show.component';




@NgModule({
  declarations: [
    ShowComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ShowsModule { }
