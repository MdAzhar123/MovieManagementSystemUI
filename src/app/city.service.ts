import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './city';
import { Theatre } from './theatre';

@Injectable({
    providedIn:'root'
})


export class CityService
{


    city:City[]=[];

    private baseUrl='abc';

    constructor(private http:HttpClient)
    {

    }

    getCityList():Observable<City[]>{

        return this.http.get<City[]>(this.baseUrl);

    }

    getCity(id:number):Observable<City[]>{
        return this.http.get<City[]>(this.baseUrl);
    }

    getTheatre(id:number):Observable<Theatre[]>{
        return this.http.get<Theatre[]>(this.baseUrl);
    }

    


}