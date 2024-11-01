import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  formularioForm;
  mensaje: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.formularioForm = this.formBuilder.group ({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correoE: ['', Validators.required],
      numeroT: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(){
    console.log("hola")
  }

  enviarDatos(){
    let datos_formulario = this.formularioForm.value;
    console.log(this.formularioForm.value);
    const datos = this.formularioForm.value;
    this.mensaje = `${datos.nombre} ${datos.apellido}.`;
    }

}
