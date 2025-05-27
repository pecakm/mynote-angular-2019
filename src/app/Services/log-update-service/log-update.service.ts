import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      alert('Dostępna: ' + event.available);
      //console.log('current version is', event.current);
      //console.log('available version is', event.available);
    });
    updates.activated.subscribe(event => {
      alert('Aktualna: ' + event.current);
      // console.log('old version was', event.previous);
      // console.log('new version is', event.current);
    });
  }
}
