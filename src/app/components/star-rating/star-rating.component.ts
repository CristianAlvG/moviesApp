import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit{

  @Input() stars:number;
  @Input() size:number = 1;

  get styles(){
    return {
      'width.rem': this.size,
      'height:rem': this.size,
      'marginRight.rem': this.size / 6
    }
  }

  getStarImage(current: number) : string{
    const previusHalf = current - 0.5;
    const imageName = 
      this.stars >= current
      ? 'https://i.imgur.com/wOu3PGu.png'
      : this.stars >= previusHalf
      ? 'https://i.imgur.com/fGZ5uvz.png'
      : 'https://i.imgur.com/EFlqkIZ.png';
    return `${imageName}`

  }

  
  
  constructor(private http:HttpClient) {
      
  }

  ngOnChanges() {
    
  }

  ngOnInit(): void {
    
  }


}
