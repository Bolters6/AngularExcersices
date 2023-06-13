import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = "PRACTICAS ANGULAR";
  contado:number = 0;
  ratio:number = 0;
  buttonActive : boolean = false;

  activeButtonWithContado(){
    if(this.ratio > 0 ){
      this.buttonActive = false;
    }else {
      this.buttonActive = true;
    }
  }
  contador() : void{
    this.contado = this.contado + this.ratio;
  }
}
