import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas-service';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  
  public movies: Movie[] = [];
  public moviesSlidehow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(){
    
    const poss = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    
    if(poss > max){

      if(this.peliculasService.cargando == true){return;}
      
      this.peliculasService.getCartelera().subscribe( resp => {
        this.movies.push(...resp.results);

      });
    }
  }

  constructor(private peliculasService:PeliculasService){

  }

  ngOnInit(): void {

      this.peliculasService.getCartelera().subscribe(resp => {
        this.movies = resp.results;
        this.moviesSlidehow = resp.results;
      });

  }

  ngOnDestroy(): void {
    this.peliculasService.resetCarteleraPage();
  }

}
