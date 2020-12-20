import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // asi se agrega codigo de Javascript a la pagina aboutus.page.html
  showAlert() {
    let d = document.getElementById("holi");
    d.style.color = "red";
  }
}
