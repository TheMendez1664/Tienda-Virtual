import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/Cliente.service';
import { Cliente } from 'src/app/models/Cliente.model';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  clienteForm!: FormGroup;
  submitted = false;
  cliente: Cliente | undefined;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.clienteForm = this.fb.group({
      id_cliente: [this.cliente?.id_cliente],
      nombre: [this.cliente?.nombre || '', Validators.required],
      apellido: [this.cliente?.apellido || '', Validators.required],
      correo: [this.cliente?.correo || '', [Validators.required, Validators.email]],
      telefono: [this.cliente?.telefono || '', [Validators.required, Validators.pattern(/^\d{1,9}$/)]],
      direccion: [this.cliente?.direccion || '', Validators.required]
    });
  }

  get f() {
    return this.clienteForm.controls;
  }

  onTelefonoInput(event: Event): void {
    const input = event.target as HTMLInputElement;

    // Eliminar cualquier carácter que no sea un número
    input.value = input.value.replace(/\D/g, '');

    // Limitar el número de caracteres a 9
    if (input.value.length > 9) {
        input.value = input.value.slice(0, 9);
    }

    // Actualizar el valor del control en el formulario
    this.clienteForm.patchValue({ telefono: input.value });
}


  onSubmit(): void {
    this.submitted = true;

    if (this.clienteForm.valid) {
      this.activeModal.close(this.clienteForm.value);
    }
  }
}
