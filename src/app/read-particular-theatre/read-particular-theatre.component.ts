import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../city.service';
import { Theatre } from '../theatre';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-read-particular-theatre',
  templateUrl: './read-particular-theatre.component.html',
  styleUrls: ['./read-particular-theatre.component.css']
})
export class ReadParticularTheatreComponent implements OnInit {

  id:number;
  theatres:Theatre[]=[];

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,
    private theatreService:TheatreService) { }

  ngOnInit() {

    this.id=this.route.snapshot.params["theatre_id"];
    this.getParticularTheatre();

  }
  getParticularTheatre()
  {
    return this.theatreService.getTheatre(this.id).subscribe(
      response=>{
        this.theatres=response;
      }
    )
  }

  backToList(){
    this.router.navigate(["theatre-details",this.id]);
  }

  movieDetails(theatre_id:number)
  {
    this.router.navigate(["movie-details",theatre_id]);
  }

}
