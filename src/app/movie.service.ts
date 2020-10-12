import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { LoginService } from './login.service';
import { Movie } from './movie';

@Injectable({
    providedIn:'root'
})

export class MovieService{
    

    private baseUrl='abef';

    constructor(private http:HttpClient,private loginService:LoginService){

    }


    getMovieList():Observable<Movie[]>{
        return this.http.get<Movie[]>(this.baseUrl);
    }

    // getMovie(id:number):Observable<any>{
    //     return this.http.get<any>('http://localhost:8082/movie-details/1');
    // }


    getMovie(id:number):Observable<any>{


        
        return this.loginService.user.pipe(

            take(1),exhaustMap(user=>{
                return this.http.get<any>('http://localhost:8082/movie-details/'+id,{
                    params:new HttpParams().set('auth',user.Token)
                });
            })

        );
    }


}

