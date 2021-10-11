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
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
