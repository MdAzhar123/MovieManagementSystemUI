import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class LoginService{
    

    constructor(private http:HttpClient){

    }

    public login(username:string,password:string){
        const headers=new HttpHeaders({Authorization:'Basic' +btoa(username+":"+password)});
     return   this.http.get('http://localhost:8080/',{headers,responseType:'text' as 'json'});
        
    }

    public  Sign(username:string,password:string):boolean{
        

  if(username=='az' && password=='123'){
      return true;
  }else
  false;

    }


}