import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Movie, ResumeMovie} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getList(): Observable<ResumeMovie[]> {
    return this.http.get<ResumeMovie[]>('/movies');
  }

  getMovie(movieId: string): Observable<Movie> {
    return this.http.get<Movie|null>(`/movies/${movieId}`)
      .pipe(
        map((value: Movie|null) => value ?? {} as Movie)
      )
  }
}
