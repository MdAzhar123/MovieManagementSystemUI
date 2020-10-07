import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckComponent } from './check/check.component';
import { LoginComponent } from './login/login.component';
import { ReadCityComponent } from './read-city/read-city.component';
import { ReadMovieComponent } from './read-movie/read-movie.component';
import { ReadParticularMovieComponent } from './read-particular-movie/read-particular-movie.component';
import { ReadParticularTheatreComponent } from './read-particular-theatre/read-particular-theatre.component';
import { ReadTheatreComponent } from './read-theatre/read-theatre.component';
import { ShowCityComponent } from './show-city/show-city.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ShowTheatreComponent } from './show-theatre/show-theatre.component';

const routes: Routes = [

  
  // {path:'',redirectTo:'users',pathMatch:'full'},
  // {path:'users',component:ShowUserComponent},
  // {path:'add',component:CreateUserComponent},
  // {path:'details/:id',component:ReadUserComponent}

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'city',component:ShowCityComponent},
  {path:'details/:id',component:ReadCityComponent},
  {path:'check',component:CheckComponent},
  {path:'theatre-show',component:ShowTheatreComponent},
  {path:'theatre-details/:id',component:ReadTheatreComponent},
  {path:'movie-show',component:ShowMovieComponent},
  {path:'movie-particular-details/:movie_id',component:ReadParticularMovieComponent},
  {path:'theatre-particular-details/:thatre_id',component:ReadParticularTheatreComponent},
  {path:'movie-details/:theatre_id',component:ReadMovieComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
