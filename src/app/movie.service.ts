import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
    providedIn:'root'
})

export class MovieService{
    

    private baseUrl='abef';

    constructor(private http:HttpClient){

    }


    getMovieList():Observable<Movie[]>{
        return this.http.get<Movie[]>(this.baseUrl);
    }

    getMovie(id:number):Observable<Movie[]>{
        return this.http.get<Movie[]>(this.baseUrl);
    }

}

