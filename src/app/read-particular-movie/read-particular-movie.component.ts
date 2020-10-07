import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-read-particular-movie',
  templateUrl: './read-particular-movie.component.html',
  styleUrls: ['./read-particular-movie.component.css']
})
export class ReadParticularMovieComponent implements OnInit {

  movies:Movie[]=[];
  id:number;
errorMsg;
  constructor(private movieService:MovieService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["movie_id"];
    this.onFetchMovieDetails()
  }
  onFetchMovieDetails(){
    return this.movieService.getMovie(this.id).subscribe(

      response=>{
        this.movies=response;
        console.log(response);
      },error=>{
        this.errorMsg=error;
        console.log('HTTP ERROR',error);
      }

    );
  }

  backToMovieList(){
    this.router.navigate(["movie-details"]);
  }

}
