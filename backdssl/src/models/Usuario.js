class Usuario {
    static tableName = 'usuarios';

    constructor(id_usuario, nombre_usuario, contraseña, rol, correo, fecha_registro) {
        this.id_usuario = id_usuario;
        this.nombre_usuario = nombre_usuario;
        this.contraseña = contraseña;
        this.rol = rol;
        this.correo = correo;
        this.fecha_registro = fecha_registro;
    }
}

module.exports = Usuario;
