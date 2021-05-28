import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sections:string[] = [ 'Presupuestos', 'Servicios'];
  section:string;
  sideNavMode:string;

  constructor() { 

  }

  ngOnInit(): void {
    this.section = "Presupuestos";
    this.sideNavMode = "side"; //over
  }



}
