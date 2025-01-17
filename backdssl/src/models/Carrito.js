class Carrito {
    static tableName = 'CarritoCompras';

    constructor(id_carrito, cliente_id, producto_id, cantidad) {
        this.id_carrito = id_carrito;
        this.cliente_id = cliente_id;
        this.producto_id = producto_id;
        this.cantidad = cantidad;
    }
}

module.exports = Carrito;