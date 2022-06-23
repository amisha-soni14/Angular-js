import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreate = "No server created!!";
  serverName = "TestServer";
  serverStatus = false;

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreate() {
    this.serverStatus = true;
    this.serverCreate = ("Server was created!! Name of server is " + this.serverName);
  }

  onUpdate(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
