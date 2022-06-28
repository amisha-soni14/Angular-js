import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  logStatusChange(status : string) {
    console.log("A server is changed : "+ status);
  }
}
