import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;
  mssg;

  @ViewChild('f',{static:false}) signUpForm : NgForm;

  // @ViewChild('username',{static:false}) usernameNg:NgModel ;

  // @ViewChild('password',{static:false}) passwordNg:NgModel ;

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  onSubmit()
{
  
let resp=this.loginService.login(this.username,this.password);

resp.subscribe(response=>{
this.mssg=response;
this.router.navigate(['city']);


});


  

// this.router.navigate(['city']);  
//  console.log(this.signUpForm);
}

onSignUpp(){
  let ex=this.loginService.Sign(this.username,this.password);

  if(ex){
    this.router.navigate(['city']);
  }
  else
  alert('wrong username or password');

  

}


}
