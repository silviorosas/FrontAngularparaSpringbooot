import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado = new Empleado();

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.empleado);
  }

}
