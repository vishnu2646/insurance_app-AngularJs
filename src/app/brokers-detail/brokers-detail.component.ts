import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokers-detail',
  templateUrl: './brokers-detail.component.html',
  styleUrls: ['./brokers-detail.component.css']
})
export class BrokersDetailComponent implements OnInit {
  toggled= false;
  menuOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  fadeMenu() {
    if(this.menuOpen) {
      this.menuOpen = false;
    } else {
      this.menuOpen = true;
    }
  }
  toAdress = () => {
    document.getElementById("adress").scrollIntoView();
  }
  toinformation = () => {
    document.getElementById("info").scrollIntoView();
  }
  togeneral = () => {
    document.getElementById("general").scrollIntoView();
  }
  toSinistres() {
    document.getElementById("sinistres").scrollIntoView();
  }
  toAssurer(){
    document.getElementById("assurer").scrollIntoView();
  }
  toAutres(){
    document.getElementById("autres").scrollIntoView();
  }
  toUtilisation(){
    document.getElementById("utilisation").scrollIntoView();
  }
  toVehicule(){
    document.getElementById("vehicule").scrollIntoView();
  }
  togRomorques(){
    document.getElementById("remorque").scrollIntoView();
  }
  toFormule(){
    document.getElementById("formule").scrollIntoView();
  }
  toAdresse(){
    document.getElementById("adresse").scrollIntoView();
  }
  toOccupation(){
    document.getElementById("occupation").scrollIntoView();
  }
  toDescription(){
    document.getElementById("description").scrollIntoView();
  }
  toCreancier(){
    document.getElementById("creancier").scrollIntoView();
  }
  toContenu(){
    document.getElementById("contenu").scrollIntoView();
  }
  toAssureur1(){
    document.getElementById("assure1").scrollIntoView();
  }
  toCouverture(){
    document.getElementById("couverture").scrollIntoView();
  }
  toFormules(){
    document.getElementById("choisie").scrollIntoView();
  }
  toChoisie(){
    document.getElementById("choisie").scrollIntoView();
  }
}
