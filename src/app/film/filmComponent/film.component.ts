import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FetchPeopleService } from 'src/app/services/fetch-people.service';
import { FetchShowService } from 'src/app/services/fetch-show.service';
import { People } from 'src/app/type/People';
import { Show } from 'src/app/type/Show';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit, OnDestroy {
  public title: string = 'Film details';
  public show!: Show;
  public characters: People[] = [];
  public subscription!: Subscription;
  constructor(private showService: FetchShowService, private fetchPeopleService: FetchPeopleService) { }

  ngOnInit(): void {
    this.show = this.showService.show;
    this.populateCharacter();
  }

  ngOnDestroy(): void {
    this.characters = [];
    this.subscription.unsubscribe();
    this.populateCharacter()
  }

  public  populateCharacter(): void {
    this.show.characters.forEach(charUri => {
      this.fetchPeopleService.uri = charUri;
      this.subscription = this.fetchPeopleService.getChracter().subscribe(
        (characters)=>{this.characters.push(characters)}
      );
    });
  }

}
