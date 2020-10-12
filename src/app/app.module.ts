import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShowCityComponent } from './show-city/show-city.component';
import { ReadCityComponent } from './read-city/read-city.component';

import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { CheckComponent } from './check/check.component';
import { ShowTheatreComponent } from './show-theatre/show-theatre.component';
import { ReadTheatreComponent } from './read-theatre/read-theatre.component';
import { ReadParticularTheatreComponent } from './read-particular-theatre/read-particular-theatre.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ReadMovieComponent } from './read-movie/read-movie.component';
import { ReadParticularMovieComponent } from './read-particular-movie/read-particular-movie.component';
import { LoginComponent } from './login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginInterceptorService } from './login-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    
    ShowCityComponent,
    
    ReadCityComponent,
    
    CheckComponent,
    
    ShowTheatreComponent,
    
    ReadTheatreComponent,
    
    ReadParticularTheatreComponent,
    
    ShowMovieComponent,
    
    ReadMovieComponent,
    
    ReadParticularMovieComponent,
    
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoginInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
