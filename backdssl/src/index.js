const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

// Importar controladores
const categoriaController = require('./Controller/CategoriaController');
const clienteController = require('./Controller/ClienteController');
const productoController = require('./Controller/ProductoController');
const usuarioController = require('./Controller/UsuarioController');
const ordenController = require('./Controller/OrdenController');
const detalleOrdenController = require('./Controller/DetalleOrdenController');
const carritoController = require('./Controller/CarritoController');
const historialPagoController = require('./Controller/HistorialPagoController');

const app = express();

// Middleware para parsear JSON y usar Helmet
app.use(express.json());
app.use(helmet());
app.use(
  helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin',
  })
);

// Configurar CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); 
  // Ajusta esto según tu configuración
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Configurar rutas
app.use('/api/Categorias', categoriaController);
app.use('/api/Clientes', clienteController);
app.use('/api/Productos', productoController);
app.use('/api/Usuarios', usuarioController);
app.use('/api/Ordenes', ordenController);
app.use('/api/DetalleOrdenes', detalleOrdenController);
app.use('/api/Carrito', carritoController);
app.use('/api/HistorialPagos', historialPagoController);

// Configurar puerto y arrancar el servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
