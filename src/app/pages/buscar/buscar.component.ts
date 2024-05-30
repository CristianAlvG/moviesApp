import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas-service';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { Location } from '@angular/common';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  private pelicula:string;

  public movies:Movie[] = [];
  public movieName:string;

  constructor(private activatedRoute:ActivatedRoute, 
              private peliculasService:PeliculasService,
              private location:Location){
    
  }
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {

      this.movieName = params['texto'];

      this.peliculasService.buscarPeliculas(params['texto']).subscribe( data =>{
        this.movies = data;
      })
    })

      


  }

  onRegresar(){
    this.location.back();
  }

}
