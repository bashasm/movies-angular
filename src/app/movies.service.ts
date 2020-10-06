import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public fetchMovies(url: string): Observable<IMovieResponse> {
    return this.http.get<IMovieResponse>(url);
  }
}
