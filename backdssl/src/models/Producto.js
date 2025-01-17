class Producto {
    static tableName = 'Productos';

    constructor(id_producto, nombre_producto, descripcion, precio, stock, imagen, categoria_id) {
        this.id_producto = id_producto;
        this.nombre_producto = nombre_producto;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.categoria_id = categoria_id;
    }
}

module.exports = Producto;
