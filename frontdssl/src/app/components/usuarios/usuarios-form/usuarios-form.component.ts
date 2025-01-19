import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/Usuario.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {
  usuarioForm!: FormGroup;
  submitted = false;
  usuario: Usuario | undefined;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.usuarioForm = this.fb.group({
      correo: [this.usuario?.correo || '', [Validators.required, Validators.email]],
      contraseña: [this.usuario?.contraseña || '', Validators.required],
      rol: [this.usuario?.rol || 'cliente', Validators.required],
    });
  }

  get f() {
    return this.usuarioForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.usuarioForm.valid) {
      this.activeModal.close(this.usuarioForm.value);
    }
  }
}
