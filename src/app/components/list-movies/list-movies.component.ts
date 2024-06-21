import {Component, OnDestroy, OnInit} from '@angular/core';
import {ResumeMovie} from "../../models/movie.model";
import {Subscription} from "rxjs";
import {MovieService} from "../../services/movie.service";
import {AsyncPipe, CurrencyPipe, DatePipe} from "@angular/common";
import {MillionDollarPipe} from "../../pipes/million-dollar.pipe";
import {DurationPipe} from "../../pipes/duration.pipe";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import dayjs from "dayjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    MillionDollarPipe,
    CurrencyPipe,
    DurationPipe,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent implements OnInit, OnDestroy{

  private fullMovies : ResumeMovie[];
  movies: ResumeMovie[];

  formFilter: FormGroup;

  private moviesSubscription : Subscription;
  private filterSubscription: Subscription;

  constructor(private movieService: MovieService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formFilter = this.formBuilder.group(
      {
        title: '',
        releasedYear: ''
      }
    );

    this.filterSubscription = this.formFilter.valueChanges.subscribe((_) => this.applyFilter());

    this.moviesSubscription = this.movieService.getList()
      .subscribe((movies: ResumeMovie[])=> {
        this.fullMovies = movies
        this.movies = this.fullMovies;
      });
  }

  ngOnDestroy() {
    this.moviesSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

  applyFilter() {
    const filterValues: {title: string, releasedYear: string} = this.formFilter.value;
    this.movies = this.fullMovies.filter((movie: ResumeMovie)=>
      movie.title.toLowerCase().includes(filterValues.title.toLowerCase())
      && (filterValues.releasedYear.length !=4 ||
          dayjs(movie.release_date).year() == parseInt(filterValues.releasedYear)
        )
    )
  }
}
