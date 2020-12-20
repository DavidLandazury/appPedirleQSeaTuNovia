import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cancion: HTMLAudioElement;

  constructor() {}

  mover() {
    let boton = document.getElementById("boton");
    let dos = document.getElementById("dos");
    let alto = Math.floor(Math.random()*200+35);
    let ancho = Math.floor(Math.random()*200+45);
    boton.style["margin-top"] = String(alto)+"px";
    if (ancho > 100) {
      boton.style["margin-left"] = "0px";
      boton.style["margin-right"] = String(ancho) + "px";
    } else {
      boton.style["margin-right"] = "0px";
      boton.style["margin-left"] = String(ancho) + "px";
    }
    //boton.style.color = "red";
  }

  playMusic() {
    this.cancion = new Audio('./assets/musica/Perfect.mp3');
    this.cancion.play();
  }
}
