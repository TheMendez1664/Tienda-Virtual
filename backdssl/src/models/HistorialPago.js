class HistorialPago {
    static tableName = 'HistorialPagos';
  
    constructor(id_pago, orden_id, fecha_pago, monto, metodo_pago) {
      this.id_pago = id_pago;
      this.orden_id = orden_id;
      this.fecha_pago = fecha_pago;
      this.monto = monto;
      this.metodo_pago = metodo_pago;
    }
  }
  
  module.exports = HistorialPago;
  