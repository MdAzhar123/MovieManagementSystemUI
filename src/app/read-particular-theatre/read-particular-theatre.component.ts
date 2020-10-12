import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  theatres:Theatre[];
  errorMsg;

  formGroup:FormGroup;



  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute,
    private theatreService:TheatreService) { }

  ngOnInit() {

    this.initForm();

   
    

  }


  onSubmit(){
    this.id=this.formGroup.value.theatre_id;
    console.log(this.id);
    this.getParticularTheatre();
  }

  getParticularTheatre()
  {
    return this.theatreService.getTheatre(this.id).subscribe(
      response=>{
        this.theatres=[response];
        console.log(response);
        console.log(this.theatres);
      },error=>{
        this.errorMsg='UnAuthorized to acess these details';
      }
    )
  }

  backToLogin(){
    this.router.navigate(["login"]);
  }

  movieDetails(id:number)
  {
    this.router.navigate(["movie-particular-details",id]);
  }


  initForm(){

    this.formGroup=new FormGroup(
      {
        theatre_id:new FormControl('',[Validators.required])
      }
    )


  }


}
