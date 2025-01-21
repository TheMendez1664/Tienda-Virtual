import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';
import { ClientesListComponent } from './components/Clientes/clientes-list/clientes-list.component';
import { UsuariosListComponent } from './components/usuarios/usuarios-list/usuarios-list.component';
import { CarritoListComponent } from './components/carrito/carrito-list/carrito-list.component';


const routes: Routes = [
    { path: 'categorias', component: CategoriaListComponent },
    { path: 'productos', component: ProductoListComponent },
    { path: 'clientes', component: ClientesListComponent },
    { path: 'usuarios', component: UsuariosListComponent },
    { path: 'carrito', component: CarritoListComponent },
    { path: '', redirectTo: '/categorias', pathMatch: 'full' } // Redirige a categorías por defecto
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
