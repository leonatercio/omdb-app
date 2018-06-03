import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OMDBService } from '../app.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls:['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  p:any
  movies:any

  constructor(private omdbService: OMDBService,private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.p = params );
  }

  ngOnInit() {
    this.MovieDetail(this.p.id);
  }

  MovieDetail(id){
    this.omdbService.movieDetail(this.p.id).subscribe(
      res => {this.movies = res;}
    )
  }
  goBack() {
    window.history.back();
  }
}