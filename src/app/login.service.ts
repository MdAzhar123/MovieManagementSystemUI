import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { error } from 'protractor';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { User } from './login/user';



export interface LoginResponseData{
    userName:string,
    status:string,
    message:string,
    role:string,
    jwt:string
}



@Injectable({
    providedIn:'root'
})




export class LoginService{


    user=new BehaviorSubject<User>(null);
    

    constructor(private http:HttpClient){

    }

    public login(data):Observable<any>{

     return   this.http.post('http://localhost:8080/login',data);
     
        
    }

    public onLogin(username:string,password:string){

        return this.http.post<LoginResponseData>('http://localhost:8080/login',{
            username:username,
            password:password
        }).pipe(

            tap(response=>{

                const user=new User(response.userName,response.role,response.jwt);

                this.user.next(user);

                console.log('################'+this.user.value.Token);
            })


        );

    }

    public loggedIn(){

       return  !!this.user.value.Token;

    }






//     public  Sign(username:string,password:string):boolean{
        

//   if(username=='az' && password=='123'){
//       return true;
//   }else
//   false;

//     }


}