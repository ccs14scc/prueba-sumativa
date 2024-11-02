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

  enviarDatos() {

    if (this.formularioForm.valid) {
      let datos_formulario = this.formularioForm.value; 
      console.log(datos_formulario); 
      // Mostramos el mensaje solo si todos los datos están completos
      this.mensaje = `${datos_formulario.nombre} ${datos_formulario.apellido}.`;

      // Limpiar el formulario después de enviar
      this.formularioForm.reset();

    } else {
      // si no esta completo, no se muestra nada
      this.mensaje = '';
    }
  }
}
