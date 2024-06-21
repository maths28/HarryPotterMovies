import { Routes } from '@angular/router';
import {ListMoviesComponent} from "./components/list-movies/list-movies.component";
import {DetailsMovieComponent} from "./components/details-movie/details-movie.component";

export const routes: Routes = [
  {path: '', component: ListMoviesComponent},
  {path: 'details-movie/:id', component: DetailsMovieComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
