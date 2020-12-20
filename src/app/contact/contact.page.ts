import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  //cancion: HTMLAudioElement;

  reproduciendo = false;
  cancion = new Audio('./assets/musica/Perfect.mp3');
  hoy = new Date();
  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  constructor() { }

  ngOnInit() {
  }

  obtenerFecha () {
    let dia = this.hoy.getDate();
    let mes = this.meses[this.hoy.getMonth()];
    let divFecha = document.getElementById("fecha");
    divFecha.innerHTML = "Empezamos a andar el " + dia + " de " + mes;
  }

  playMusic() {
    if (this.reproduciendo == false) {
      this.cancion.play();
      this.reproduciendo = true;
    } else {
      this.cancion.pause();
      this.reproduciendo = false;
    }
  }
}
