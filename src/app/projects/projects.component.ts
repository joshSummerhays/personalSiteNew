import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {

  codewars: any = null;

  constructor(private _http: HttpService) { 
    _http.codewarsContentAnnounced$.subscribe(
      (value: any) => {
        this.codewars = value;
      }
    )
  }

  ngOnInit() {
  }

}
