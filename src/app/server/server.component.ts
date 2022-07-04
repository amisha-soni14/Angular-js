import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Params } from '@angular/router';


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

export class ServerComponent implements OnInit {

  server!: {
    id: number,
    name: string
  };

  serverId:number = 10 ;
  serverStatus:string = 'offline';
  constructor(private route: ActivatedRoute, private loginservice : LoginService, ) {
    this.serverStatus = Math.random() > 0.5 ? "online" :"offline";
    this.loginservice.logStatusChange(this.serverStatus);//sevices
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);//fetch a queryParams & fragment
    this.server = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe (
        (params: Params) => {
          this.server.id = params['id'];
          this.server.name = params['name'];
        }//dynamic params
      );
    this.route.params.subscribe((params: Params) =>
    {
      this.server.id = +params['id'];
    });
  }

  getServerStatus() {

    return this.serverStatus;
  }

  // Dynamic style from ngStyle
  getColor() {
    return this.serverStatus === "online" ? 'lightgreen': 'red';
  }


}
