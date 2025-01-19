export interface Usuario {
  id_usuario: number;
  correo: string;
  contraseña: string;
  rol: 'cliente' | 'admin';
  fecha_registro: Date;
}
