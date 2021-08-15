import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css']
})
export class ClaseComponent implements OnInit {

  @Input() class : string = "" 
  @Input() seme : string = "" 
  @Input() nom : string = ""
  @Input() prom : number = 0

  nombre = ""
  promedio = 0
  clase = ""
  semestre = ""

  titulo = "datos del estudiante"
  constructor() { }
  ngOnInit(): void {}

  agregar(){
    try {
      if(this.nom != "" && this.prom != 0 && this.class != "", this.seme != ""){
        this.nom = this.nombre
        this.prom = this.promedio
        this.class = this.clase
        this.seme = this.semestre
      }
    } catch (e) {
      
    }
  }

}
