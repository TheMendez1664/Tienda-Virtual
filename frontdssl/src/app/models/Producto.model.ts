export interface Producto {
  id_producto: number;
  nombre_producto: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagen: string; // URL de la imagen
  categoria_id: number; // Relación con categoría
}
