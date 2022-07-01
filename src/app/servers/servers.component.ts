import {
  Directive,
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
}from '@angular/core';
import { Router } from '@angular/router';

import {ViewEncapsulation} from '@angular/core';

// @Directive ({
//   selector: "[bgColor]"
// })

@Component ({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom
})

export class ServersComponent implements OnInit , OnDestroy, AfterViewInit {
  servers = [
    {
      id: 1,
      name: "Amisha"
    },
    {
      id: 2,
      name: "Tanisha"
    }
  ];


  allowServer = false;
  serverCreate = "No server created!!";
  serverName : string = "TestServer";
  serverStatus = false;
  // HostBinding ('propertyname.subproperty')
  @HostBinding('style.backgroundColor')backgroundColor : string = "transparent";

  constructor(private elRef: ElementRef, private renderer:Renderer2, private router: Router) {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  // lifecycle hooks(OnInit, OnDestroy, onAfterViewInit)
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

  onLoad(id: number) {
    this.router.navigate(['/server', id, 'edit'],{queryParams: {allowEdit:'1'},fragment:'loading'});
  } //Navigating programatically

  OnDestroyMethod() {
    console.log("OnDestory is callled")
    console.log( this.serverName.slice(0));
  }

  // HostListener and HostBinding
  @HostListener('mouseenter')mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color","lightpink");
    this.backgroundColor = "lightpink";
  }

  @HostListener('mouseleave')mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color","transparent");
    this.backgroundColor = "transparent";
  }
}
