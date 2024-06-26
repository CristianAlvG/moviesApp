import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PeliculasService } from './services/peliculas-service';
import { CarteleraResponse } from './interfaces/cartelera-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'peliculasApp';


  constructor(private peliculasService:PeliculasService){

    this.peliculasService.getCartelera().subscribe(resp => {
      console.log(resp.results);
    });
    
  }


}
