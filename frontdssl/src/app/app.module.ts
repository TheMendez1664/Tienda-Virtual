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

@NgModule({
  declarations: [
    AppComponent,
    CategoriaFormComponent,
    CategoriaListComponent,
    ProductoFormComponent,
    ProductoListComponent
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
