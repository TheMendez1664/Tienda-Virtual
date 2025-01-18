export interface Cliente {
  id_cliente: number;
  id_usuario: number; // Nueva relación obligatoria
  nombre: string;
  apellido: string;
  telefono: string;
  direccion: string;
}
