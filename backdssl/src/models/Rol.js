class User {
  static tableName = 'rol';

  constructor(id, nombre, descripcion) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

module.exports = User;