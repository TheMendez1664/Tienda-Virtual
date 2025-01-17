const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

// Importar controladores
// Ajusta el path según el nombre real de tu carpeta de controladores ("Controller" o "controllers")
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
  // Ajusta "Access-Control-Allow-Origin" con la URL de tu frontend, si la conoces
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// Configurar rutas
// Se sugiere usar nombres de rutas en minúsculas y consistentes
app.use('/api/categorias', categoriaController);
app.use('/api/clientes', clienteController);
app.use('/api/productos', productoController);
app.use('/api/usuarios', usuarioController);
app.use('/api/ordenes', ordenController);
app.use('/api/detalleOrdenes', detalleOrdenController);
app.use('/api/carrito', carritoController);
app.use('/api/historialPagos', historialPagoController);

// Configurar puerto y arrancar el servidor
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
