import { People } from "./People";
import { Planet } from "./Planet";
import { Specie } from "./Specie";
import { Starship } from "./Starship";
import { Vehicle } from "./Vehicle";

export type Show = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: People[];
  planets: Planet[];
  starships: Starship[];
  vehicles: Vehicle[];
  species: Specie[];
  created: string;
  edited: string;
  url: string;
}
