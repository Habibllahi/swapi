import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FetchShowService } from 'src/app/services/fetch-show.service';
import { Show } from 'src/app/type/Show';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit, OnDestroy {
  public filteredShows!: Show[];
  public shows: Show[]=[];
  private subscription! : Subscription
  private _filterBy: string = ''

  constructor(private showService: FetchShowService, private route: Router) { }

  ngOnInit(): void {
   this.subscription = this.showService.fetchShows().subscribe(
     (shows: Show[])=>{
        this.shows.push(...shows);
        this.filteredShows = this.shows;
     }
   );

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  public get filterBy() : string {
    return this._filterBy
  }

  public set filterBy(filter : string) {
    this._filterBy = filter;
    this.performFilter();
    //console.log(JSON.stringify(this.filteredShows));
  }

  private performFilter(){
    if(this._filterBy !==''){
      this.filteredShows = this.shows.filter((show:Show,index:number)=>{
        return show.title.toLocaleLowerCase().search(this.filterBy.toLocaleLowerCase())>-1;
      });
    }else{
      this.filteredShows = this.shows;
    }
  }

  public onSelected(): void{
    this.route.navigateByUrl('/film')
    //console.log('selected film');

  }




}
