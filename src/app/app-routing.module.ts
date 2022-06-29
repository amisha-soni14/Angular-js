import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  { path: "servers", component: ServersComponent },
  { path: "server/id/name", component: ServerComponent },
  { path: "server", component: ServerComponent },
  { path: "**", component: ServersComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
