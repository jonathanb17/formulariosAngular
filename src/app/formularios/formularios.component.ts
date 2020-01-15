import { Component, OnInit } from '@angular/core';
import { Usuarios } from './../models/Usuarios';



@Component({
  selector: 'formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {


  public datos:Usuarios;

  constructor() { 

    this.datos= new Usuarios('','','',0);
  }



  onSubmit(){
    console.log(this.datos);
  }

  ngOnInit() {
  }

}
