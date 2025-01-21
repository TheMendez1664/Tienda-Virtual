class Usuario {
    static tableName = 'Usuario';
  
    constructor(id_usuario, correo, contraseña, rol, fecha_registro) {
      this.id_usuario = id_usuario;
      this.correo = correo;
      this.contraseña = contraseña;
      this.rol = rol;
      this.fecha_registro = fecha_registro;
    }
  }
  
  module.exports = Usuario;
  