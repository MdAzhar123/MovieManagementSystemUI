import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  formGroup:FormGroup;

  id:number;
  
  errorMsg;

  constructor(private router:Router,private route:ActivatedRoute,private http:HttpClient,
    private theatreService:TheatreService) { }

  ngOnInit() {

    this.initForm();

  }

  initForm(){

    this.formGroup=new FormGroup(
      {
        id:new FormControl('',[Validators.required])
      }
    )


  }

  onSubmit()
  {
    
  }

  


  


}
