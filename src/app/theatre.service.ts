import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { LoginService } from './login.service';
import { Theatre } from './theatre';

@Injectable({
    providedIn:'root'
})

export class TheatreService{
    
    private baseUrl='abcd';

    constructor(private http:HttpClient,private loginService:LoginService)
    {

    }


    getTheatreList():Observable<Theatre[]>{
        return this.http.get<Theatre[]>('');
    }

    // getTheatre(id:number):Observable<any>{
    //     return this.http.get<any>('http://localhost:8081/theatre/1');
    // }

    getTheatre(id:number):Observable<any>{


        theatre_id:Number;

        return this.loginService.user.pipe(

            

            take(1),exhaustMap(user=>{
                return this.http.get<any>('http://localhost:8081/theatre/'+id,{
                    params:new HttpParams().set('auth',user.Token)
                    
                });
            })

        );
    }



}

