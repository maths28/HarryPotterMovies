import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "../../models/movie.model";
import {MovieService} from "../../services/movie.service";
import {AsyncPipe} from "@angular/common";
import {MillionDollarPipe} from "../../pipes/million-dollar.pipe";
import {DurationPipe} from "../../pipes/duration.pipe";
import {ConcatStringsPipe} from "../../pipes/concat-strings.pipe";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-details-movie',
  standalone: true,
  imports: [
    AsyncPipe,
    MillionDollarPipe,
    DurationPipe,
    ConcatStringsPipe,
    RouterLink
  ],
  templateUrl: './details-movie.component.html',
  styleUrl: './details-movie.component.css'
})
export class DetailsMovieComponent implements OnInit{
  @Input('id') private movieId: string;
  movie$: Observable<Movie>;

  constructor(private movieService : MovieService) {
  }

  ngOnInit(): void {
    this.movie$ = this.movieService.getMovie(this.movieId);
  }




}
