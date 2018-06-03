import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OMDBService } from '../app.service';
import {MatSnackBar} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {Movies} from '../movies/movies.model'
import { Router} from '@angular/router';
import { Http, Response, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http'

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  id: any;
  breakpoint: number;
  Movie = "";
  movies : Movies[] = [];
  nFilmes : any
  tJson : any
  isDone = true;
  count = 0;
  titleValue: any;
  totalPages:any;
  type : Movies[] = [];
  spinner = false;
  private apiKey = '891cfff2';

  constructor(private omdbService: OMDBService,private router: Router, private http: Http) {}

  ngOnInit() {
    $('.search-results').hide();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  getNextFilms(titleValue, count){
    return this.http.get("http://www.omdbapi.com/?apikey="+this.apiKey+'&s='+this.titleValue+'&page='+this.count)
    .map((res: Response) => res.json())
  }

  //Filter type
  // tipo(value:string){
  //   this.spinner = true;
  //   this.titleValue = `${value}`;
  //   console.log("Tipo: "+this.titleValue);
  //   console.log("Value: "+`${value}`);
    
  //   this.omdbService.searchType(this.titleValue).subscribe(res => {
  //     this.spinner = false;
  //     this.type = res.Search;
  //     console.log(res);

  //     if(this.type == undefined || this.type == null){
  //         $('.nFilmes').hide();
  //         $('.search-results').hide();
  //         $('.error').show();
  //         $('.error').html('<p align="left">O tipo não foi econtrado!</p>');
  //        this.spinner = false;
  //     }else{
  //       $('.search-results').show();
  //       $(".results").show();
  //       this.tJson = this.type.length;
  //       this.nFilmes = res.totalResults;
  //       $('.error').hide();
  //       $('.nFilmes').show();
  //       $('.search-results').show();
  //       this.spinner = false;
  //     }
  //   });
  // }

  //Button search function
  busca(event) {
    this.count = 1;
    if(event.keyCode == 13){

      this.spinner = true;
      $('.scroll').html("");
      this.Movie = event.target.value;
      this.titleValue = event.target.value;
      this.omdbService.movies(this.Movie,1).subscribe(filme => {
        this.movies = filme.Search;
        
        if(this.movies == undefined || this.movies == null){
          $('.nFilmes').hide();
          $('.search-results').hide();
          $('.error').show();
          $('.error').html('<p align="left">O filme pesquisado não foi econtrado!</p>');
          this.spinner = false;
        }else{
          $(".results").show();
          this.tJson = this.movies.length;

          this.nFilmes = filme.totalResults;
          this.spinner = false;
          $('.error').hide();
          $('.nFilmes').show();
          $('.search-results').show();
        }
      });
    }
  }
  
  //Infinite Scroll function
  onScrollDown(){
    this.titleValue = $("#search").val();
    this.spinner = true;
    this.getNextFilms(this.titleValue,this.count)
    .subscribe(data => {
        if(data.Response !== 'False'){
          const myArr = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              myArr.push(data[key]);
            }
          }

          this.movies = myArr[0];
          this.totalPages = Math.round(data.totalResults/10);
          $(".results").hide();
          for (var i = 0; i < this.movies.length; i++) {
            $(".scroll").append("<div fxLayout='row' fxLayout.xs='column' fxLayoutWrap fxLayoutGap='0.5%' fxLayoutAlign='center'><ngx-loading [show]='spinner'></ngx-loading><mat-card><img mat-card-image src="+this.movies[i].Poster+"  height='300px' onError=\"this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsLWP3Hym4rLxUIVhckpMu717_bDbR3oHSP1TiH0E5n_i-PfX'\"><mat-chip-list _ngcontent-c0='' class='mat-chip-list-stacked mat-chip-list' tabindex='0' aria-required='false' aria-disabled='false' aria-invalid='false' aria-multiselectable='false' role='listbox' aria-orientation='horizontal'><div class='mat-chip-list-wrapper'><mat-chip _ngcontent-c0='' class='mat-chip mat-danger mat-chip-selected' color='danger' role='option' selected='true' ng-reflect-color='danger' ng-reflect-selected='true' tabindex='-1' aria-disabled='false' aria-selected='true'> FILME: "+ this.movies[i].Title + "</mat-chip><mat-chip _ngcontent-c0='' class='mat-chip mat-primary mat-chip-selected' color='primary' role='option' selected='true' ng-reflect-color='primary' ng-reflect-selected='true' tabindex='-1' aria-disabled='false' aria-selected='true'>ANO: "+this.movies[i].Year+" | TIPO: "+this.movies[i].Type+" | <a _ngcontent-c0='' ng-reflect-router-link='/movie/"+this.movies[i].imdbID+"' href='/movie/"+this.movies[i].imdbID+"'>Ver detalhes</a> <i _ngcontent-c0='' class='fa fa-search'></i></mat-chip></div></mat-chip-list></mat-card></div><br>").slideDown(500).delay(200);
            if (this.count == this.totalPages){
              this.titleValue = $("#search").val();
              this.count = 0;
              this.movies = null;
              this.spinner = false;
            }
            this.spinner = false;
          }
          this.isDone = true;
        }else{
          this.isDone = true;
          this.movies = null;
          console.log('Not Found');
        }
    });
    this.spinner = false;
    this.count++;
  }
  //END COMPONENT HOME
}
