import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  toggled= false;
  menuOpen = false;
  row = true;
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

  hideRow() {
    if(this.row){
      this.row = false;
    } else {
      this.row = true;
    }
  }
}
