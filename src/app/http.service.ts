import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class HttpService {

  codewarsContent = new BehaviorSubject<any>(null);
  codewarsContentAnnounced$ = this.codewarsContent.asObservable();
  
  root = '/';
  // root = 'http://localhost:3000/';
  codeWarsUrl = this.root + 'api/codewars';

  header = new Headers({'Content-Type': 'application/json'});
  
  constructor() { 
    fetch(this.codeWarsUrl)
    .then((res: any) => res.json())
    .then(data => {
      this.codewarsContent.next(data);
    })
  }



}
