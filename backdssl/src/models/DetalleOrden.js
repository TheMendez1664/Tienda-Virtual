class DetalleOrden {
    static tableName = 'DetallesOrden';

    constructor(id_detalle, orden_id, producto_id, cantidad, precio_unitario, subtotal) {
        this.id_detalle = id_detalle;
        this.orden_id = orden_id;
        this.producto_id = producto_id;
        this.cantidad = cantidad;
        this.precio_unitario = precio_unitario;
        this.subtotal = subtotal;
    }
}

module.exports = DetalleOrden;