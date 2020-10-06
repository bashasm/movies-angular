import { Component, OnInit } from '@angular/core';
import { IMovie } from './interfaces';
import { MoviesService } from './movies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  FEATURED_API =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
  SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

  public movies: IMovie[] = [];
  public searchTerm = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getMovies(this.FEATURED_API);
  }

  public onSubmit() {
    const url = !this.searchTerm
      ? this.FEATURED_API
      : this.SEARCH_API + this.searchTerm;

    this.getMovies(url);
  }

  public getMovies(url: string) {
    this.moviesService.fetchMovies(url).subscribe((data) => {
      this.movies = data.results;
    });
  }
}
