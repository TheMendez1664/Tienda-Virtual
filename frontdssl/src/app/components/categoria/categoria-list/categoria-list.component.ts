import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoría.model';
import { CategoriaService } from 'src/app/services/Categoria.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriaFormComponent } from '../categoria-form/categoria-form.component';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadCategorias();
  }

  loadCategorias(): void {
    this.categoriaService.getCategorias().subscribe(
      (response) => this.categorias = response,
      (error) => console.error('Error al cargar categorías:', error)
    );
  }

  openCategoriaModal(categoria?: Categoria): void {
    const modalRef = this.modalService.open(CategoriaFormComponent);
    if (categoria) {
      modalRef.componentInstance.categoria = categoria;
      modalRef.componentInstance.isEditMode = true;
    }

    modalRef.result.then((result) => {
      if (result) {
        if (result.id_categoria) {
          this.categoriaService.updateCategoria(result.id_categoria, result).subscribe(() => this.loadCategorias());
        } else {
          this.categoriaService.createCategoria(result).subscribe(() => this.loadCategorias());
        }
      }
    }).catch(() => { /* Modal cerrado sin acción */ });
  }

  editarCategoria(categoria: Categoria): void {
    this.openCategoriaModal(categoria);
  }

  eliminarCategoria(id_categoria: number): void {
    const confirmacion = confirm('¿Está seguro de eliminar esta categoría?');
    if (confirmacion) {
      this.categoriaService.deleteCategoria(id_categoria).subscribe(() => this.loadCategorias());
    }
  }
}
