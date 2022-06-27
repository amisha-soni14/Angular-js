import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
@Component ({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class ServersComponent implements OnInit , OnDestroy, AfterViewInit {
  allowServer = false;
  serverCreate = "No server created!!";
  serverName : string = "TestServer";
  serverStatus = false;

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
    console.log("ngOnInit is called")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy is called")
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit is callled")
  }

  onCreate() {
    this.serverStatus = true;
    this.serverCreate = ("Server was created!! Name of server is " + this.serverName);
  }

  onUpdate(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  OnDestroyMethod() {
    console.log("OnDestory is callled")
    console.log( this.serverName.slice(0));
  }

}
