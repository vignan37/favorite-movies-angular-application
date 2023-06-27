import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from '../feature/feature.module';



@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FeatureModule
  ]
})
export class LazyModModule { }
