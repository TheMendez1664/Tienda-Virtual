import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalComponent } from './components/PagPrincipalComponent/pag-principal.component';
import { ProductosComponent } from './components/ProductosComponent/productos.component';
import { DetalleProductoComponent } from './components/DetalleProductoComponent/detalle-producto.component';
import { CarritoComponent } from './components/CarritoComponent/carrito.component';
import { DetalleCarritoComponent } from './components/DetalleCarritoComponent/detalle-carrito.component';
import { LoginComponent } from './components/LoginComponent/login.component';
import { BusquedaComponent } from './components/BusquedaComponent/busqueda.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },
  { path: 'pagina-principal', component: PagPrincipalComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: DetalleProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'detalle-carrito', component: DetalleCarritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: '**', redirectTo: '/pagina-principal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
