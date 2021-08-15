import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  class : string = "" 
  seme : string = "" 
  nom : string = ""
  prom : number = 0

  constructor() { }

  ngOnInit(): void {}

  

}
