import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './components/categoria/categoria-list/categoria-list.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';

const routes: Routes = [
    { path: 'categorias', component: CategoriaListComponent },
    { path: 'productos', component: ProductoListComponent },
    { path: '', redirectTo: '/categorias', pathMatch: 'full' } // Redirige a categorías por defecto
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
