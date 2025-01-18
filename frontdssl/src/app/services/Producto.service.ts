import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto.model';
import { Categoria } from '../models/Categoría.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrlProductos = 'http://localhost:3000/api/productos';
  private apiUrlCategorias = 'http://localhost:3000/api/categorias';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrlProductos);
  }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrlCategorias); // Cargar categorías
  }

  createProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrlProductos, producto);
  }

  updateProducto(id: number, producto: Producto): Observable<any> {
    return this.http.put(`${this.apiUrlProductos}/${id}`, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlProductos}/${id}`);
  }
}
