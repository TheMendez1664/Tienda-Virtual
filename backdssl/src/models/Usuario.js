class Usuario {
  static tableName = 'Usuario';

  constructor(id_usuario, correo, contraseña, rol, fecha_registro) {
      this.id_usuario = id_usuario;
      this.correo = correo;
      this.contraseña = contraseña;
      this.rol = rol || 'cliente';
      this.fecha_registro = fecha_registro || new Date();
  }
}

module.exports = Usuario;
