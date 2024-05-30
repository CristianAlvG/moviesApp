import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { catchError, map } from 'rxjs/operators';

import { tap } from 'rxjs/operators'
import { MovieResponse } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl = "https://api.themoviedb.org/3";
  private carteleraPage = 1;
  public cargando:boolean;

  constructor(private http: HttpClient) {

  }

  get params(){
    return{
      api_key:'a029b99863d6e263e987043bb79883ff',
      languaje: 'en-US',
      page: this.carteleraPage.toString()
    }
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getCartelera():Observable<CarteleraResponse>{
    
    this.cargando = true;

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/movie/now_playing`,{
      params:this.params
    }).pipe(
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );
  }

  buscarPeliculas(texto:string):Observable<Movie[]>{

    const params = {...this.params, page: 1, query : texto};

    return this.http.get<CarteleraResponse>(`${this.baseUrl}/search/movie`, {
        params
    }).pipe(
      map( resp => resp.results )
    );

  }


  getPeliculaDetalle( id:string ){
    
    return this.http.get<MovieResponse>(`${this.baseUrl}/movie/${id}`, {
        params: this.params
    }).pipe(
      catchError( err => of(null))
    );



  }

  getCast( id:string ):Observable<Cast[]>{
    
    return this.http.get<CreditsResponse>(`${this.baseUrl}/movie/${id}/credits`, {
        params: this.params
    }).pipe(
      map(resp => resp.cast),
      catchError( err => of(null))
    );

    

  }
  
}
