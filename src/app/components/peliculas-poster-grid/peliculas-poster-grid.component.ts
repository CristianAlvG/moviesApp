import { Component, Input, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas-service';
import { CarteleraResponse, Movie } from '../../interfaces/cartelera-response';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit{

  @Input() movies:Movie[];

  constructor(private router:Router){

  }



  ngOnInit(): void {
    //console.log(this.movies);
  }


  onMovieClick(movie:Movie){
    this.router.navigate(['/pelicula', movie.id])
  }
}
