import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  formularioForm;
  mensaje: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.formularioForm = this.formBuilder.group ({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
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
      // se muestra el mensaje solo si todos los campos estan llenos
      this.mensaje = `${datos_formulario.nombre} ${datos_formulario.apellido}`;

      // para resetear el formulario despues de enviar
      this.formularioForm.reset();

    } else {
      // si no esta completo, no se muestra nada
      this.mensaje = '';
    }
  }
}
