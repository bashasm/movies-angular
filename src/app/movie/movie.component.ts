import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../interfaces';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input()
  public movie: IMovie;

  private IMGPATH = 'https://image.tmdb.org/t/p/w1280';
  public path =
    'https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';

  constructor() {}

  public ngOnInit(): void {
    if (this.movie.poster_path) {
      this.path = `${this.IMGPATH}${this.movie.poster_path}`;
    }
  }

  public setVoteClass(average: number) {
    if (average >= 8) {
      return 'green';
    } else if (average >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}
