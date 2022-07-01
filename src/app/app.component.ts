import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
// ViewEncapsulation
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  encapsulation : ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'demo-project';

  constructor(private router: Router){

  }
  onLoad() {
      this.router.navigate(['/servers']);
  }

}

