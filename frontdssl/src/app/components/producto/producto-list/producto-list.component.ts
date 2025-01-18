import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto.model';
import { ProductoService } from 'src/app/services/Producto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoFormComponent } from '../producto-form/producto-form.component';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(): void {
    this.productoService.getProductos().subscribe(
      (response) => this.productos = response,
      (error) => console.error('Error al cargar productos:', error)
    );
  }

  openProductoModal(producto?: Producto): void {
    const modalRef = this.modalService.open(ProductoFormComponent);
    if (producto) {
      modalRef.componentInstance.producto = producto;
      modalRef.componentInstance.isEditMode = true;
    }

    modalRef.result.then((result) => {
      if (result) {
        if (result.id_producto) {
          this.productoService.updateProducto(result.id_producto, result).subscribe(() => this.loadProductos());
        } else {
          this.productoService.createProducto(result).subscribe(() => this.loadProductos());
        }
      }
    }).catch(() => { /* Modal cerrado sin acción */ });
  }

  editarProducto(producto: Producto): void {
    this.openProductoModal(producto);
  }

  eliminarProducto(id_producto: number): void {
    const confirmacion = confirm('¿Está seguro de eliminar este producto?');
    if (confirmacion) {
      this.productoService.deleteProducto(id_producto).subscribe(() => this.loadProductos());
    }
  }
}
