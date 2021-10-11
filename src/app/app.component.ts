import { Component, OnInit } from '@angular/core';
import { Link } from './type/Link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title = 'swapi';
  public links: Link[] = [
    {
      url: '/shows',
      fragment: 'shows'
    },
  {
    url: '/planet',
    fragment: 'planet'
  },
  {
    url: 'starship',
    fragment: 'starship'
  }
  ]

  constructor(){}
  ngOnInit(): void {
  }

}
