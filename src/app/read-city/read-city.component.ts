import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from '../city';
import { CityService } from '../city.service';


@Component({
  selector: 'app-read-city',
  templateUrl: './read-city.component.html',
  styleUrls: ['./read-city.component.css']
})
export class ReadCityComponent implements OnInit {

  cities:City[]=[];

  id:number;

  errorMsg;

  constructor(private cityService:CityService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route.snapshot.params["id"];
    this.fetchCity()
  }

  fetchCity()
  {
    return this.cityService.getCity(this.id).subscribe(
      response=>{
      this.cities=response;
      console.log(response);
      },error=>{
        this.errorMsg=error.message;
        console.log('HTTP Error', error);
      }
    )
  }

  theatreDetails(id:number)
  {
    this.router.navigate(["theatre-details",id]);
  }

  


  backToList(){
    this.router.navigate(["city"])
  }

}
