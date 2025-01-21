import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { PagPrincipalComponent } from './components/PagPrincipalComponent/pag-principal.component';
import { ProductosComponent } from './components/ProductosComponent/productos.component';
import { DetalleProductoComponent } from './components/DetalleProductoComponent/detalle-producto.component';
import { CarritoComponent } from './components/CarritoComponent/carrito.component';
import { DetalleCarritoComponent } from './components/DetalleCarritoComponent/detalle-carrito.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { BusquedaComponent } from './components/BusquedaComponent/busqueda.component';
import { BarraCategoriaComponent } from './components/BarraCategoriaComponent/barra-categoria.component';

// Servicios
import { ProductoService } from './services/Producto.service';
import { CarritoService } from './services/Carrito.service';
import { CategoriaService } from './services/Categoria.service';
import { UsuarioService } from './services/Usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    PagPrincipalComponent,
    ProductosComponent,
    DetalleProductoComponent,
    CarritoComponent,
    DetalleCarritoComponent,
    LoginComponent,
    BusquedaComponent,
    BarraCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductoService,
    CarritoService,
    CategoriaService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
