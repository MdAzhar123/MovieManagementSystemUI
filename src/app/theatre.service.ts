import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theatre } from './theatre';

@Injectable({
    providedIn:'root'
})

export class TheatreService{
    
    private baseUrl='abcd';

    constructor(private http:HttpClient)
    {

    }


    getTheatreList():Observable<Theatre[]>{
        return this.http.get<Theatre[]>(this.baseUrl);
    }

    getTheatre(id:number):Observable<Theatre[]>{
        return this.http.get<Theatre[]>(this.baseUrl);
    }



}

