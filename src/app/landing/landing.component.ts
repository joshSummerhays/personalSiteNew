import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.panels = document.querySelectorAll('.panel');
    // this.panels.forEach(panel => panel.addEventListener('click', this.toggleOpen));
    // this.panels.forEach(panel => panel.addEventListener('transitionend', this.toggleActive));
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
