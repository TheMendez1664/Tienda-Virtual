import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioService } from 'src/app/services/Usuario.service';
import { UsuariosFormComponent } from '../usuarios-form/usuarios-form.component';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe(
      (data) => (this.usuarios = data),
      (error) => console.error('Error al cargar usuarios:', error)
    );
  }

  openUsuarioModal(usuario?: Usuario): void {
    const modalRef = this.modalService.open(UsuariosFormComponent);
    if (usuario) {
      modalRef.componentInstance.usuario = usuario;
      modalRef.componentInstance.isEditMode = true;
    }

    modalRef.result
      .then((result) => {
        if (result) {
          if (usuario) {
            this.usuarioService.updateUsuario(usuario.id_usuario, result).subscribe(() => this.loadUsuarios());
          } else {
            this.usuarioService.createUsuario(result).subscribe(() => this.loadUsuarios());
          }
        }
      })
      .catch(() => {});
  }

  editarUsuario(usuario: Usuario): void {
    this.openUsuarioModal(usuario);
  }

  eliminarUsuario(id: number): void {
    const confirmacion = confirm('¿Está seguro de eliminar este usuario?');
    if (confirmacion) {
      this.usuarioService.deleteUsuario(id).subscribe(() => this.loadUsuarios());
    }
  }
}
