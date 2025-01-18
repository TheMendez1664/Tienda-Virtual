import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClienteService } from 'src/app/services/Cliente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientesFormComponent } from '../clientes-form/clientes-form.component';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadClientes();
  }

  loadClientes(): void {
    this.clienteService.getClientes().subscribe(
      (response) => this.clientes = response,
      (error) => console.error('Error al cargar clientes:', error)
    );
  }

  openClienteModal(cliente?: Cliente): void {
    const modalRef = this.modalService.open(ClientesFormComponent);
    if (cliente) {
      modalRef.componentInstance.cliente = cliente;
      modalRef.componentInstance.isEditMode = true;
    }

    modalRef.result.then((result) => {
      if (result) {
        if (result.id_cliente) {
          this.clienteService.updateCliente(result.id_cliente, result).subscribe(() => this.loadClientes());
        } else {
          this.clienteService.createCliente(result).subscribe(() => this.loadClientes());
        }
      }
    }).catch(() => { /* Modal cerrado sin acción */ });
  }

  eliminarCliente(id_cliente: number): void {
    const confirmacion = confirm('¿Está seguro de eliminar este cliente?');
    if (confirmacion) {
      this.clienteService.deleteCliente(id_cliente).subscribe(() => this.loadClientes());
    }
  }
}
