create database tiendavirtual;

use tiendavirtual;

-- Tabla Usuario
CREATE TABLE `Usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `correo` VARCHAR(255) UNIQUE NOT NULL,
  `contraseña` VARCHAR(255) NOT NULL,
  `rol` ENUM('cliente', 'admin') DEFAULT 'cliente',
  `fecha_registro` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla Cliente
CREATE TABLE `Cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_usuario` INT UNIQUE NOT NULL,
  `nombre` VARCHAR(255),
  `apellido` VARCHAR(255),
  `telefono` VARCHAR(15),
  `direccion` TEXT,
  FOREIGN KEY (`id_usuario`) REFERENCES `Usuario`(`id_usuario`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla Categorias
CREATE TABLE `Categorias` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre_categoria` VARCHAR(50) NOT NULL UNIQUE,
  `descripcion` TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla Productos
CREATE TABLE `Productos` (
  `id_producto` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre_producto` VARCHAR(100) NOT NULL,
  `descripcion` TEXT,
  `precio` DECIMAL(10,2) NOT NULL,
  `stock` INT NOT NULL,
  `imagen` BLOB,
  `categoria_id` INT NOT NULL,
  FOREIGN KEY (`categoria_id`) REFERENCES `Categorias`(`id_categoria`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla CarritoCompras
CREATE TABLE `CarritoCompras` (
  `id_carrito` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `cliente_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id_cliente`) ON DELETE CASCADE,
  FOREIGN KEY (`producto_id`) REFERENCES `Productos`(`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla Ordenes
CREATE TABLE `Ordenes` (
  `id_orden` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `cliente_id` INT NOT NULL,
  `fecha_orden` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `estado` ENUM('pendiente', 'completada', 'cancelada') DEFAULT 'pendiente',
  `total` DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id_cliente`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla DetallesOrden
CREATE TABLE `DetallesOrden` (
  `id_detalle` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `orden_id` INT NOT NULL,
  `producto_id` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `precio_unitario` DECIMAL(10,2) NOT NULL,
  `subtotal` DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (`orden_id`) REFERENCES `Ordenes`(`id_orden`) ON DELETE CASCADE,
  FOREIGN KEY (`producto_id`) REFERENCES `Productos`(`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Tabla HistorialPagos
CREATE TABLE `HistorialPagos` (
  `id_pago` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `orden_id` INT NOT NULL,
  `fecha_pago` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `monto` DECIMAL(10,2) NOT NULL,
  `metodo_pago` ENUM('tarjeta', 'paypal', 'transferencia') NOT NULL,
  FOREIGN KEY (`orden_id`) REFERENCES `Ordenes`(`id_orden`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Datos de Ejemplo

INSERT INTO `Usuario` (correo, contraseña, rol) VALUES
('cliente1@example.com', 'cliente123', 'cliente'),
('cliente2@example.com', 'cliente456', 'cliente'),
('admin1@example.com', 'admin123', 'admin'),
('cliente3@example.com', 'cliente789', 'cliente');

INSERT INTO `Cliente` (id_usuario, nombre, apellido, telefono, direccion) VALUES
(1, 'Juan', 'Pérez', '987654321', 'Calle Primavera 123'),
(2, 'María', 'López', '912345678', 'Avenida Sol 456'),
(4, 'Carlos', 'Gómez', '921234567', 'Pasaje Luna 789');

INSERT INTO `Categorias` (nombre_categoria, descripcion) VALUES
('Electrónica', 'Dispositivos electrónicos y accesorios'),
('Hogar', 'Productos para el hogar y muebles'),
('Ropa', 'Prendas de vestir para todas las edades'),
('Juguetes', 'Juguetes para niños de todas las edades');

INSERT INTO `Productos` (nombre_producto, descripcion, precio, stock, imagen, categoria_id) VALUES
('Smartphone Galaxy S21', 'Teléfono móvil de alta gama con pantalla AMOLED', 999.99, 20, NULL, 1),
('TV LED 55"', 'Televisor LED de 55 pulgadas con resolución 4K', 699.99, 15, NULL, 1),
('Silla Ergonómica', 'Silla de oficina ajustable y cómoda', 129.99, 50, NULL, 2),
('Vestido Floral', 'Vestido de verano con diseño floral', 49.99, 70, NULL, 3),
('Auto de Juguete', 'Auto a control remoto con batería recargable', 29.99, 40, NULL, 4),
('Auriculares Bluetooth', 'Auriculares inalámbricos con cancelación de ruido', 199.99, 30, NULL, 1),
('Laptop Gamer', 'Laptop de alto rendimiento con tarjeta gráfica dedicada', 1499.99, 10, NULL, 1),
('Cámara Reflex', 'Cámara profesional con lente de 18-55mm', 799.99, 25, NULL, 1),
('Tablet 10"', 'Tablet con pantalla HD y 64GB de almacenamiento', 299.99, 40, NULL, 1),
('Mesa de Centro', 'Mesa de madera para sala de estar', 89.99, 20, NULL, 2),
('Sofá 3 Plazas', 'Sofá moderno y cómodo para tres personas', 499.99, 15, NULL, 2),
('Lámpara de Techo', 'Lámpara de techo con diseño minimalista', 129.99, 50, NULL, 2),
('Aspiradora', 'Aspiradora potente y silenciosa con filtro HEPA', 249.99, 25, NULL, 2),
('Camisa Casual', 'Camisa de algodón en varios colores', 19.99, 100, NULL, 3),
('Pantalón Deportivo', 'Pantalón de poliéster para actividades físicas', 24.99, 80, NULL, 3),
('Zapatillas Running', 'Zapatillas ligeras para correr', 59.99, 60, NULL, 3),
('Chaqueta de Invierno', 'Chaqueta acolchada para bajas temperaturas', 99.99, 50, NULL, 3),
('Muñeca Articulada', 'Muñeca con accesorios y ropa intercambiable', 39.99, 70, NULL, 4),
('Bloques de Construcción', 'Set de bloques para armar edificios y vehículos', 49.99, 100, NULL, 4),
('Rompecabezas 1000 Piezas', 'Rompecabezas temático para toda la familia', 29.99, 50, NULL, 4),
('Drone para Niños', 'Drone pequeño y fácil de usar con cámara integrada', 79.99, 30, NULL, 4);

INSERT INTO `CarritoCompras` (cliente_id, producto_id, cantidad) VALUES
(1, 1, 2),
(1, 3, 1),
(2, 2, 1),
(3, 4, 3);

INSERT INTO `Ordenes` (cliente_id, fecha_orden, estado, total) VALUES
(1, NOW(), 'pendiente', 1259.98),
(2, NOW(), 'completada', 699.99),
(3, NOW(), 'cancelada', 149.97);

INSERT INTO `DetallesOrden` (orden_id, producto_id, cantidad, precio_unitario, subtotal) VALUES
(1, 1, 2, 999.99, 1999.98),
(1, 3, 1, 129.99, 129.99),
(2, 2, 1, 699.99, 699.99),
(3, 4, 3, 49.99, 149.97);

INSERT INTO `HistorialPagos` (orden_id, monto, metodo_pago) VALUES
(1, 1259.98, 'tarjeta'),
(2, 699.99, 'paypal');
