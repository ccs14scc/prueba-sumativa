import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  contactoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  
    this.contactoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Aquí puedes agregar lógica adicional si es necesario
  }

  // Método para manejar la presentación del formulario
  onSubmit() {
    if (this.contactoForm.valid) {
      const formData = this.contactoForm.value;
      console.log('Formulario enviado:', formData);
      // Aquí puedes enviar los datos a tu servicio o backend
      this.contactoForm.reset(); // resetea el formulario después de enviar
    } else {
      console.log('Formulario inválido');
    }
  }
}
