import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrlClientes = 'http://localhost:3000/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrlClientes);
  }

  createCliente(cliente: Cliente): Observable<any> {
    return this.http.post(this.apiUrlClientes, cliente);
  }

  updateCliente(id: number, cliente: Cliente): Observable<any> {
    return this.http.put(`${this.apiUrlClientes}/${id}`, cliente);
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrlClientes}/${id}`);
  }
}
