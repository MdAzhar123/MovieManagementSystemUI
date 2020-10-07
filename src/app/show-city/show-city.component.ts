import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { City } from '../city';
import { CityService } from '../city.service';
import{catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-show-city',
  templateUrl: './show-city.component.html',
  styleUrls: ['./show-city.component.css']
})
export class ShowCityComponent implements OnInit {


cities:City[]=[];

abc=[1,2,3];

errorMsg;

  constructor(private cityService:CityService, private router:Router) { }

  ngOnInit() {
    this.fetchCityList();
  }

  fetchCityList()
  {
return this.cityService.getCityList().subscribe(
  response=>{
    this.cities=response;
    console.log(response);
  },error=>{
    this.errorMsg=error.message;
    console.log('HTTP Error', error);
  }
)
  }


  cityDetails(id:number)
  {

    this.router.navigate(["details",id]);
     
  }

  theatreDetails()
  {
    this.router.navigate(["theatre-show"]);
  }

  check(){
    
    this.router.navigate(["check"]);
  }
  movieDetails(){
    this.router.navigate(["movie-show"]);
  }


}
