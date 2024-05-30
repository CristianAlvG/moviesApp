import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SliderhowComponent } from './sliderhow/sliderhow.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SliderhowComponent,
    PeliculasPosterGridComponent,
    StarRatingComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports:[
    NavbarComponent,
    SliderhowComponent,
    PeliculasPosterGridComponent, 
    StarRatingComponent,
    CastSlideshowComponent
  ]
})
export class ComponentsModule { }