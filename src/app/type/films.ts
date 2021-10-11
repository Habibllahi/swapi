import { Show } from "./Show";

export type Film = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Show[];
}
