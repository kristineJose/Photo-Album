import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  images = [
    { url: 'assets/img/pic1.jpg' },
    { url: 'assets/img/pic2.jpeg' },
    { url: 'assets/img/pic3.jpg' },
    { url: 'assets/img/pic6.jpg' }, 
    { url: 'assets/img/pic1.jpg' },
    { url: 'assets/img/pic2.jpeg' },
    { url: 'assets/img/pic1.jpg' },
    { url: 'assets/img/pic2.jpeg' },
    
  ];
  
  constructor(private route: Router) {}


  album(){
    
  }
}
