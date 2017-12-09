import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverWasCreated = false;
  showSecretPassword = false;
  
  // serverWasCreated = false;
  serverCreationStatus = 'No server was created!';
  userCreationStatus = 'No user was created!';
  serverName = '';
  userName = '';
  servers = ['Testserver', 'Testserver 2'];

  // aufgabe 4
  buttonClickCounter = 0;
  buttonClickLogArray = [];
  
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverWasCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);

  //   if (this.serverWasCreated==false){
  //   this.serverWasCreated = true;    
  //   this.serverCreationStatus = 'Server was created!';
  // } else {
  //   this.serverWasCreated = false;
  //   this.serverCreationStatus = 'Server was destroyed!';  
  // }
  }
  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onResetUser() {
    this.userCreationStatus = 'User was reset!';
    this.userName = "";

  }
  onShowPassword() {

    this.buttonClickLogArray.push(this.buttonClickCounter);
    this.buttonClickCounter++;

    // variante 1 ausführlich
    /*  if (this.showSecretPassword === true){
      this.showSecretPassword = false;
    } else{
      this.showSecretPassword = true;
    } */

    // variante 2 syntactic sugar
    //this.showSecretPassword === true ? this.showSecretPassword=false : this.showSecretPassword=true;
    
    // variante 3 ohne if
    this.showSecretPassword = !this.showSecretPassword;
    
  }
}
