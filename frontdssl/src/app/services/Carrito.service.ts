import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrito } from '../models/Carrito.model';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private apiUrl = 'http://localhost:3000/api/carrito';

  constructor(private http: HttpClient) {}

  getCarritos(): Observable<Carrito[]> {
    return this.http.get<Carrito[]>(this.apiUrl);
  }

  getCarritoById(id: number): Observable<Carrito> {
    return this.http.get<Carrito>(`${this.apiUrl}/${id}`);
  }

  createCarrito(carrito: Carrito): Observable<Carrito> {
    return this.http.post<Carrito>(this.apiUrl, carrito);
  }

  updateCarrito(id: number, carrito: Carrito): Observable<Carrito> {
    return this.http.put<Carrito>(`${this.apiUrl}/${id}`, carrito);
  }

  deleteCarrito(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  clearCarrito(clienteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/clear/${clienteId}`);
  }
}
