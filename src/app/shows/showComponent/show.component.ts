import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FetchShowService } from 'src/app/services/fetch-show.service';
import { Show } from 'src/app/type/Show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {
  public shows: Show[]=[];
  private subscription! : Subscription
  constructor(private showService: FetchShowService) { }

  ngOnInit(): void {
   this.subscription = this.showService.fetchShows().subscribe(
     (shows: Show[])=>{
        this.shows.push(...shows);
     }
   )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
