import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  createUsuario(usuario: Partial<Usuario>): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  updateUsuario(id: number, usuario: Partial<Usuario>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
