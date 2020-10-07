import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { CityService } from '../city.service';
import { ShowMovieComponent } from '../show-movie/show-movie.component';

import { ShowCityComponent } from './show-city.component';


class RouterStub
{
  navigate(params){

  }
}


describe('ShowCityComponent', () => {
  let component: ShowCityComponent;
  let fixture: ComponentFixture<ShowCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ShowCityComponent ],
      providers:[CityService,{provide:Router,useClass:RouterStub}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCityComponent);
    component = fixture.componentInstance;
    
  });

  it('should load data from service',()=>{

    let service=TestBed.get(CityService);

    // let service=TestBed.inject(CityService);

    let mockRes=[1];

    spyOn(service,'getCityList').and.callFake(()=>{

      return of(mockRes);

      fixture.detectChanges();

      expect(component.cities.length).toBe(1);

    });

  });


  it('should redirect to city details', () => {
    // let router=TestBed.get(Router);

    let router=TestBed.inject(Router);
  
    let spy=spyOn(router,'navigate');
  
    component.cityDetails(1);
    fixture.detectChanges();
  
  expect(spy).toHaveBeenCalledWith(['details',1]);
  });



  it('should redirect to Theatre details', () => {
    // let router=TestBed.get(Router);
    let router=TestBed.inject(Router);
  
    let spy=spyOn(router,'navigate');
  
    component.theatreDetails();
    fixture.detectChanges();
  
  expect(spy).toHaveBeenCalledWith(['theatre-show']);
  });



  it('should redirect to Movie details', () => {
    // let router=TestBed.get(Router);
  
    let router=TestBed.inject(Router);
    let spy=spyOn(router,'navigate');
  
    component.movieDetails();
    fixture.detectChanges();
  
  expect(spy).toHaveBeenCalledWith(['movie-show']);
  });




  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('City is present',()=>{

    expect(component.cities.length).toEqual(0);
  });

});




  

