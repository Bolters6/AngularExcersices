import {Component, OnInit} from '@angular/core';
import {Server} from "../../models/server";
import * as events from "events";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-servers-creation',
  templateUrl: './servers-creation.component.html',
  styleUrls: ['./servers-creation.component.css']
})
export class ServersCreationComponent implements OnInit {
  servers: Server[] = [];
  nameServer: string = "";
  status: string = "off";
  numberRow: number = 0;
  constructor() {
    this.changeStatus();
  }

  ngOnInit(): void {

  }
  creationServer(){
    this.changeStatus();
    let server: Server = {
      name: this.nameServer,
      creationDate: new DatePipe('en').transform(Date.now(), 'dd-MM-yyyy'),
      status: this.status
    }
    this.servers.push(server);
    console.log(server)
    this.numberRow++;
  }
  changeStatus(){
    if(Math.random() >= 0.5){
      this.status = "on"
    }else {
      this.status = "off"
    }
  }

  protected readonly events = events;
}
