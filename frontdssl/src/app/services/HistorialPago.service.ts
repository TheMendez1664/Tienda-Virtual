import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HistorialPago } from '../models/HistorialPago.model';

@Injectable({
  providedIn: 'root',
})
export class HistorialPagoService {
  private apiUrl = 'http://localhost:3000/api/historialPagos';

  constructor(private http: HttpClient) {}

  getHistorialesPago(): Observable<HistorialPago[]> {
    return this.http.get<HistorialPago[]>(this.apiUrl);
  }

  getHistorialPagoById(id: number): Observable<HistorialPago> {
    return this.http.get<HistorialPago>(`${this.apiUrl}/${id}`);
  }

  createHistorialPago(historialPago: HistorialPago): Observable<HistorialPago> {
    return this.http.post<HistorialPago>(this.apiUrl, historialPago);
  }

  updateHistorialPago(id: number, historialPago: HistorialPago): Observable<HistorialPago> {
    return this.http.put<HistorialPago>(`${this.apiUrl}/${id}`, historialPago);
  }

  deleteHistorialPago(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
