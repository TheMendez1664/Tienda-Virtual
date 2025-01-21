import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Componentes de Categoría
import { CategoriaFormComponent } from './components/categoria/categoria-form/categoria-form.component';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';

// Componentes de Producto
import { ProductoFormComponent } from './components/producto/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';

// Componentes de Clientes
import { ClientesFormComponent } from './components/Clientes/clientes-form/clientes-form.component';
import { ClientesListComponent } from './components/Clientes/clientes-list/clientes-list.component';

// Componentes de Usuarios
import { UsuariosListComponent } from './components/usuarios/usuarios-list/usuarios-list.component';
import { UsuariosFormComponent } from './components/usuarios/usuarios-form/usuarios-form.component';

// Componentes de Carrito
import { CarritoListComponent } from './components/carrito/carrito-list/carrito-list.component';
import { CarritoFormComponent } from './components/carrito/carrito-form/carrito-form.component';




@NgModule({
  declarations: [
    AppComponent,

    CategoriaFormComponent,
    CategoriaListComponent,

    ProductoFormComponent,
    ProductoListComponent,
    
    ClientesFormComponent,
    ClientesListComponent,
    
    UsuariosListComponent,
    UsuariosFormComponent,

    CarritoListComponent,
    CarritoFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
