import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../city.service';
import { Theatre } from '../theatre';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-read-theatre',
  templateUrl: './read-theatre.component.html',
  styleUrls: ['./read-theatre.component.css']
})
export class ReadTheatreComponent implements OnInit {


  id:number;
  theatre_id:number;
  theatres:Theatre[]=[];
  errorMsg;

  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient,
    private theatreService:TheatreService) { }

  ngOnInit() {

    this.id=this.route.snapshot.params["id"];
    this.ongetTheatre();

  }

  ongetTheatre()
  {
    this.theatreService.getTheatre(this.id).subscribe(
      response=>{
        this.theatres=response;
      },error=>{
        this.errorMsg=error;
        console.log('HTTP ERROR',error);
      }
    );
  }

  getTheatreDetail(theatre_id:number)
  {
     this.router.navigate(["theatre-particular-details",theatre_id]);
  }
  backToList(){
    this.router.navigate(["theatre-show"]);
  }

  movieDetails(){
    this.router.navigate(["movie-show"]);
  }


  


}
