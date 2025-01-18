import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from 'src/app/services/Producto.service';
import { Producto } from 'src/app/models/Producto.model';
import { Categoria } from 'src/app/models/Categoría.model';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  productoForm!: FormGroup;
  submitted = false;
  producto: Producto | undefined;
  categorias: Categoria[] = [];
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.loadCategorias(); // Cargar las categorías disponibles
  }

  initForm(): void {
    this.productoForm = this.fb.group({
      id_producto: [this.producto?.id_producto],
      nombre_producto: [this.producto?.nombre_producto || '', Validators.required],
      descripcion: [this.producto?.descripcion || '', Validators.required],
      precio: [this.producto?.precio || 0, [Validators.required, Validators.min(0)]],
      stock: [this.producto?.stock || 0, [Validators.required, Validators.min(0)]],
      categoria_id: [this.producto?.categoria_id || '', Validators.required] // Relación con la categoría
    });
  }

  loadCategorias(): void {
    this.productoService.getCategorias().subscribe(
      (data) => this.categorias = data,
      (error) => console.error('Error al cargar categorías', error)
    );
  }

  get f() { return this.productoForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.productoForm.valid) {
      this.activeModal.close(this.productoForm.value);
    }
  }
}
