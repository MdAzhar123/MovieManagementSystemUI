import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  movies:Movie[]=[];

  errorMsg;

  constructor(private movieService:MovieService,private http:HttpClient,private router:Router) { }

  ngOnInit(){
    this.onFetchMovieList();
  }
  onFetchMovieList(){

    return this.movieService.getMovieList().subscribe(
    
      response=>{
        this.movies=response;
        console.log(response);
      },error=>{
        this.errorMsg=error.message;
        console.log('HTTP ERROR',error);
      }
    );

  }

  backToTheatre(){
    this.router.navigate(["theatre-show"]);
  }

}
