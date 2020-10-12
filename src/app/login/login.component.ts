import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponseData, LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup:FormGroup;

errorMsg;
   
 

  // @ViewChild('username',{static:false}) usernameNg:NgModel ;

  // @ViewChild('password',{static:false}) passwordNg:NgModel ;

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {

    this.initForm();

  }
  initForm(){

    this.formGroup=new FormGroup(
      {
        username:new FormControl('',[Validators.required]),
        password:new FormControl('',[Validators.required])
      }
    )
    
  }






//   onSubmit()
// {
  
// if(this.formGroup.valid){
//   this.loginService.login(this.formGroup.value).subscribe(result=>{
//      this.router.navigate(['theatre-particular-details/',1]);
//       alert(result.message);
//       console.log(result.message);
      
//       console.log(this.formGroup.value.username);
//   });
// }

// }



onSubmit()
{
  
 let authObs:Observable<LoginResponseData>

if(this.formGroup.valid){
 authObs= this.loginService.onLogin(this.formGroup.value.username,this.formGroup.value.password);
}

authObs.subscribe(
  response=>
  {
    console.log(response);
    this.router.navigate(['theatre-particular-details']);
  },error=>{
    console.log('111111111111'+error.message);
    this.errorMsg='Incorrect Username or Password';
  }
);

}





  

// this.router.navigate(['city']);  
//  console.log(this.signUpForm);
}

// onSignUpp(){
//   let ex=this.loginService.Sign(this.username,this.password);

//   if(ex){
//     this.router.navigate(['city']);
//   }
//   else
//   alert('wrong username or password');

  

// }



