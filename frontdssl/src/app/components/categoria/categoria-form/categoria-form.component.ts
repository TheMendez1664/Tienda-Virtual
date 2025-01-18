import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Categoria } from 'src/app/models/Categoría.model';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {
  categoriaForm!: FormGroup;
  submitted = false;
  categoria: Categoria | undefined;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.categoriaForm = this.fb.group({
      id_categoria: [this.categoria?.id_categoria],
      nombre_categoria: [this.categoria?.nombre_categoria || '', Validators.required],
      descripcion: [this.categoria?.descripcion || '', Validators.required]
    });
  }

  get f() { return this.categoriaForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if (this.categoriaForm.valid) {
      this.activeModal.close(this.categoriaForm.value);
    }
  }
}
