class Orden {
    static tableName = 'Ordenes';

    constructor(id_orden, cliente_id, fecha_orden, estado, total) {
        this.id_orden = id_orden;
        this.cliente_id = cliente_id;
        this.fecha_orden = fecha_orden;
        this.estado = estado;
        this.total = total;
    }
}

module.exports = Orden;