class Cliente {
    static tableName = 'clientes';

    constructor(id_cliente, nombre, apellido, correo, telefono, direccion, fecha_registro) {
        this.id_cliente = id_cliente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
        this.direccion = direccion;
        this.fecha_registro = fecha_registro;
    }
}

module.exports = Cliente;
