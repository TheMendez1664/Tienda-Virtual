class Cliente {
    static tableName = 'Cliente';
  
    constructor(id_cliente, id_usuario, nombre, apellido, telefono, direccion) {
      this.id_cliente = id_cliente;
      this.id_usuario = id_usuario;
      this.nombre = nombre;
      this.apellido = apellido;
      this.telefono = telefono;
      this.direccion = direccion;
    }
  }
  
  module.exports = Cliente;
  