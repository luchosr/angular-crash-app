import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  myMethod() {
    return console.log('Hey, what is up!');
  }
}
