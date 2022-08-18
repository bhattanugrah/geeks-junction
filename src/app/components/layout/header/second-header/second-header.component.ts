import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit {
  faAngleLeft = faAngleLeft
  faAngleRight = faAngleRight

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  scrollLeft(){
    document.getElementsByClassName("button-container")[0].scrollLeft -=300;
    console.log("Left arrow clicked!");
  }

  scrollRight(){
    document.getElementsByClassName("button-container")[0].scrollLeft +=300;
    console.log("Right Arrow Clicked!");
  }

}
