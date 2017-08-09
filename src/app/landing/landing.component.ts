import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit, AfterViewInit {

  // panels;
  isOpen1: boolean = false;
  isOpen2: boolean = false;
  isOpen3: boolean = false;
  isOpen4: boolean = false;
  isOpen5: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.panels = document.querySelectorAll('.panel');
    // this.panels.forEach(panel => panel.addEventListener('click', this.toggleOpen));
    // this.panels.forEach(panel => panel.addEventListener('transitionend', this.toggleActive));
  }


  toggleOpen(item) {
    if(item === '1') this.isOpen1 = !this.isOpen1;
    if(item === '2') this.isOpen2 = !this.isOpen2;
    if(item === '3') this.isOpen3 = !this.isOpen3;
    if(item === '4') this.isOpen4 = !this.isOpen4;
    if(item === '5') this.isOpen5 = !this.isOpen5;
  }

  toggleActive(e) {
    // if (e.propertyName.includes('flex')) {
      // e.target.classList.toggle('open-active');
    // }
  }

  transitionEnd(e){
    if (e.propertyName.includes('flex')) {
      e.target.classList.toggle('gone');
      e.target.classList.toggle('open-active');
    }
  }


}
