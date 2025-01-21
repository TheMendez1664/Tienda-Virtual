import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from 'src/app/services/Carrito.service';
import { Carrito } from 'src/app/models/Carrito.model';

@Component({
  selector: 'app-carrito-form',
  templateUrl: './carrito-form.component.html',
  styleUrls: ['./carrito-form.component.css']
})
export class CarritoFormComponent implements OnInit {
  carritoForm!: FormGroup;
  submitted = false;
  carrito: Carrito | undefined;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private carritoService: CarritoService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.carritoForm = this.fb.group({
      cliente_id: [this.carrito?.cliente_id || '', Validators.required],
      producto_id: [this.carrito?.producto_id || '', Validators.required],
      cantidad: [this.carrito?.cantidad || 1, [Validators.required, Validators.min(1)]]
    });
  }

  get f() { return this.carritoForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.carritoForm.valid) {
      const formData = this.carritoForm.value;
      this.activeModal.close(formData);
    }
  }
}
