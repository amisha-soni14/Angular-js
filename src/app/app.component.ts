import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  encapsulation : ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'demo-project';
}

