import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compagine',
  templateUrl: './compagine.component.html',
  styleUrls: ['./compagine.component.css']
})
export class CompagineComponent implements OnInit {
  row=true
  constructor() { }

  ngOnInit(): void {
  }
  hideRow() {
    if(this.row){
      this.row = false;
    } else {
      this.row = true;
    }
  }
}
