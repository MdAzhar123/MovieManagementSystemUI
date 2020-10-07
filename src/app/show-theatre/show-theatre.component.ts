import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CityService } from '../city.service';
import { Theatre } from '../theatre';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-show-theatre',
  templateUrl: './show-theatre.component.html',
  styleUrls: ['./show-theatre.component.css']
})
export class ShowTheatreComponent implements OnInit {

  theatres:Theatre[]=[];

  id:number;

  errorMsg;

  constructor(private http:HttpClient,private router:Router,private theatreService:TheatreService) { }

  ngOnInit() {

    this.fetchTheatreList();
   
  }

  fetchTheatreList()
  {
    return this.theatreService.getTheatreList().subscribe(

      response=>{
        this.theatres=response;
        console.log(response);
      },error=>{
        this.errorMsg=error.message;
        console.log('HTTP Error', error);
      }

    )
  }

  movieDetails(){
    this.router.navigate(["movie-show"]);
  }

  backToCity(){
    this.router.navigate(["city"]);
  }

}
