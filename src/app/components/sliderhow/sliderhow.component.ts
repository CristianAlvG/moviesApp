import { AfterContentInit ,AfterViewInit,Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import {Swiper} from 'swiper';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { SwiperModule } from 'swiper/types';


@Component({
  selector: 'app-sliderhow',
  templateUrl: './sliderhow.component.html',
  styleUrls: ['./sliderhow.component.css']
})
export class SliderhowComponent implements OnInit, AfterViewInit{

  @Input() movies:Movie[];

  public mySwiper:Swiper;
  

  constructor(){

  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.mySwiper = new Swiper('.swiper', {
      
        direction:'horizontal',
        autoplay: {
          delay: 2000,
        },
        // Opción para definir el número de elementos a mostrar en la pantalla en cada momento
        slidesPerView: 1,
        // Opción para habilitar el cambio automático entre los elementos del carrusel
        
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // Opción para permitir el desplazamiento manual mediante gestos en dispositivos táctiles
        touchMoveStopPropagation: true,
      });

    }, 1000);

    //window.dispatchEvent(new Event('resize'));
  }


  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

}
