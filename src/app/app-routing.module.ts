import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './lazy-mod/home/home.component';
import { MovieComponent } from './lazy-mod/movie/movie.component';
import { LazyModModule } from './lazy-mod/lazy-mod.module';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch:'full'},
  { path:'login',component: LoginComponent},
  { path:'home',component: HomeComponent},
  { path:'movie/:type/:id',component: MovieComponent},
  { path:'**',component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LazyModModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
