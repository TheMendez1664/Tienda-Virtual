import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/Carrito.service';
import { Carrito } from 'src/app/models/Carrito.model';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css']
})
export class CarritoListComponent implements OnInit {
  carritos: Carrito[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.loadCarritos();
  }

  loadCarritos(): void {
    this.carritoService.getCarritos().subscribe(
      (data) => this.carritos = data,
      (error) => console.error('Error al cargar carritos', error)
    );
  }

  deleteCarrito(id: number): void {
    if (confirm('¿Está seguro de eliminar este carrito?')) {
      this.carritoService.deleteCarrito(id).subscribe(() => {
        this.loadCarritos();
      });
    }
  }
}
