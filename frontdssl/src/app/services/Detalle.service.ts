import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleOrden } from '../models/DetalleOrden.model';

@Injectable({
  providedIn: 'root',
})
export class DetalleOrdenService {
  private apiUrl = 'http://localhost:3000/api/detalleOrdenes';

  constructor(private http: HttpClient) {}

  getDetallesOrden(): Observable<DetalleOrden[]> {
    return this.http.get<DetalleOrden[]>(this.apiUrl);
  }

  getDetalleOrdenById(id: number): Observable<DetalleOrden> {
    return this.http.get<DetalleOrden>(`${this.apiUrl}/${id}`);
  }

  createDetalleOrden(detalleOrden: DetalleOrden): Observable<DetalleOrden> {
    return this.http.post<DetalleOrden>(this.apiUrl, detalleOrden);
  }

  updateDetalleOrden(id: number, detalleOrden: DetalleOrden): Observable<DetalleOrden> {
    return this.http.put<DetalleOrden>(`${this.apiUrl}/${id}`, detalleOrden);
  }

  deleteDetalleOrden(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
