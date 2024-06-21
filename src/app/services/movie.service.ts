import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie, ResumeMovie} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {}

  getList(): Observable<ResumeMovie[]> {
    return this.http.get<ResumeMovie[]>('/movies');
  }
}
