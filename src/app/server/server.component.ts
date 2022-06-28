import { Component } from '@angular/core';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles : [`
    .offline {
      color : white;
    }
  `],
  providers: [LoginService] //services Injectors
})
export class ServerComponent {
  serverId:number = 10 ;
  serverStatus:string = 'offline';
  constructor(private loginservice : LoginService) {
    this.serverStatus = Math.random() > 0.5 ? "online" :"offline";
    this.loginservice.logStatusChange(this.serverStatus);//sevices
  }

  getServerStatus() {

    return this.serverStatus;
  }

  // Dynamic style from ngStyle
  getColor() {
    return this.serverStatus === "online" ? 'lightgreen': 'red';
  }


}
