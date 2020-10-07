import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-read-movie',
  templateUrl: './read-movie.component.html',
  styleUrls: ['./read-movie.component.css']
})
export class ReadMovieComponent implements OnInit {

  movies:Movie[]=[];
  id:number;
  errorMsg;

  constructor(private movieService:MovieService,private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
    this.id=this.route.snapshot.params["theatre_id"];
    this.ongetMovie()
  }

  ongetMovie(){
    return this.movieService.getMovie(this.id).subscribe(

      response=>{
        this.movies=response;
        console.log(response);
      },error=>{
        this.errorMsg=error.message;
        console.log('HTTP ERROR',error);
      }

    );
  }
  movieDetails(movie_id:number){
    this.router.navigate(["movie-particular-details",movie_id]);
  }
  backToList(){
    this.router.navigate(["theatre-show"]);
  }

}
