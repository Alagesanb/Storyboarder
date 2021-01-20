import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image1 = 'assets/img/brand/1.png';
  image2 = 'assets/img/brand/2.png';
  image3 = 'assets/img/brand/3.png';
  image4 = 'assets/img/brand/4.png';
  image5 = 'assets/img/brand/5.png';
  
  constructor() { }

  ngOnInit(): void {
  }

}
