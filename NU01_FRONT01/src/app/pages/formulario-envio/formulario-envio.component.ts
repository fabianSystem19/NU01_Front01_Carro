import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-envio',
  templateUrl: './formulario-envio.component.html',
  styleUrls: ['./formulario-envio.component.css']
})
export class FormularioEnvioComponent implements OnInit {

  public formEnvios: FormGroup = new FormGroup({});
  
  elementos: any[] = [
    { img: 'Foto', producto: 'Aifon', precio: 500, cantidad: 2 },
    { img: 'Foto', producto: 'RunRun', precio: 300, cantidad: 3 },
  ];

  constructor(private formBuilder: FormBuilder){

  }
  
  ngOnInit(): void {
    this.formEnvios = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      pais: ['', Validators.required],
      departamento: ['', Validators.required],
      ciudad: ['', Validators.required],
      direccion: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required]
    });
  }

  send(): any{
    console.log(this.formEnvios.value);
  }
}
