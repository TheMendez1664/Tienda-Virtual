-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: TiendaVirtual
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CarritoCompras`
--

DROP TABLE IF EXISTS `CarritoCompras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CarritoCompras` (
  `id_carrito` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `producto_id` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`id_carrito`),
  KEY `cliente_id` (`cliente_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `CarritoCompras_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `Clientes` (`id_cliente`) ON DELETE CASCADE,
  CONSTRAINT `CarritoCompras_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `Productos` (`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CarritoCompras`
--

LOCK TABLES `CarritoCompras` WRITE;
/*!40000 ALTER TABLE `CarritoCompras` DISABLE KEYS */;
INSERT INTO `CarritoCompras` VALUES (1,1,2,1),(2,2,3,2),(3,3,1,1),(4,4,4,3),(5,5,5,2);
/*!40000 ALTER TABLE `CarritoCompras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categorias`
--

DROP TABLE IF EXISTS `Categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(50) NOT NULL,
  `descripcion` text,
  PRIMARY KEY (`id_categoria`),
  UNIQUE KEY `nombre_categoria` (`nombre_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categorias`
--

LOCK TABLES `Categorias` WRITE;
/*!40000 ALTER TABLE `Categorias` DISABLE KEYS */;
INSERT INTO `Categorias` VALUES (1,'Electrónica','Dispositivos electrónicos y accesorios'),(2,'Hogar','Productos para el hogar y muebles'),(3,'Ropa','Prendas de vestir para todas las edades'),(4,'Juguetes','Juguetes para niños de todas las edades');
/*!40000 ALTER TABLE `Categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Clientes`
--

DROP TABLE IF EXISTS `Clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Clientes` (
  `id_cliente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clientes`
--

LOCK TABLES `Clientes` WRITE;
/*!40000 ALTER TABLE `Clientes` DISABLE KEYS */;
INSERT INTO `Clientes` VALUES (1,'Lucía','Martínez','lucia.martinez@example.com','987654321','Calle Primavera 123','2025-01-09 07:28:30'),(2,'Pedro','García','pedro.garcia@example.com','123456789','Avenida Sol 456','2025-01-09 07:28:30'),(3,'Ana','López','ana.lopez@example.com','567890123','Pasaje Luna 789','2025-01-09 07:28:30'),(4,'Javier','Hernández','javier.hernandez@example.com','987321654','Calle Estrella 321','2025-01-09 07:28:30'),(5,'Carla','Fernández','carla.fernandez@example.com','654987321','Avenida Mar 654','2025-01-09 07:28:30');
/*!40000 ALTER TABLE `Clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DetallesOrden`
--

DROP TABLE IF EXISTS `DetallesOrden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DetallesOrden` (
  `id_detalle` int NOT NULL AUTO_INCREMENT,
  `orden_id` int NOT NULL,
  `producto_id` int NOT NULL,
  `cantidad` int NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_detalle`),
  KEY `orden_id` (`orden_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `DetallesOrden_ibfk_1` FOREIGN KEY (`orden_id`) REFERENCES `Ordenes` (`id_orden`) ON DELETE CASCADE,
  CONSTRAINT `DetallesOrden_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `Productos` (`id_producto`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DetallesOrden`
--

LOCK TABLES `DetallesOrden` WRITE;
/*!40000 ALTER TABLE `DetallesOrden` DISABLE KEYS */;
INSERT INTO `DetallesOrden` VALUES (1,1,1,1,999.99,999.99),(2,1,3,2,129.99,259.98),(3,2,2,1,699.99,699.99),(4,3,5,1,29.99,29.99),(5,4,3,1,129.99,129.99),(6,4,4,1,49.99,49.99),(7,5,1,1,999.99,999.99);
/*!40000 ALTER TABLE `DetallesOrden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HistorialPagos`
--

DROP TABLE IF EXISTS `HistorialPagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HistorialPagos` (
  `id_pago` int NOT NULL AUTO_INCREMENT,
  `orden_id` int NOT NULL,
  `fecha_pago` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `monto` decimal(10,2) NOT NULL,
  `metodo_pago` enum('tarjeta','paypal','transferencia') NOT NULL,
  PRIMARY KEY (`id_pago`),
  KEY `orden_id` (`orden_id`),
  CONSTRAINT `HistorialPagos_ibfk_1` FOREIGN KEY (`orden_id`) REFERENCES `Ordenes` (`id_orden`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HistorialPagos`
--

LOCK TABLES `HistorialPagos` WRITE;
/*!40000 ALTER TABLE `HistorialPagos` DISABLE KEYS */;
INSERT INTO `HistorialPagos` VALUES (1,1,'2025-01-09 07:28:30',1299.98,'tarjeta'),(2,4,'2025-01-09 07:28:30',179.98,'paypal');
/*!40000 ALTER TABLE `HistorialPagos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ordenes`
--

DROP TABLE IF EXISTS `Ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Ordenes` (
  `id_orden` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `fecha_orden` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` enum('pendiente','completada','cancelada') DEFAULT 'pendiente',
  `total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_orden`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `Ordenes_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `Clientes` (`id_cliente`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ordenes`
--

LOCK TABLES `Ordenes` WRITE;
/*!40000 ALTER TABLE `Ordenes` DISABLE KEYS */;
INSERT INTO `Ordenes` VALUES (1,1,'2025-01-09 07:28:30','completada',1299.98),(2,2,'2025-01-09 07:28:30','pendiente',699.99),(3,3,'2025-01-09 07:28:30','cancelada',29.99),(4,4,'2025-01-09 07:28:30','completada',179.98),(5,5,'2025-01-09 07:28:30','pendiente',999.99);
/*!40000 ALTER TABLE `Ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Productos`
--

DROP TABLE IF EXISTS `Productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(100) NOT NULL,
  `descripcion` text,
  `precio` decimal(10,2) NOT NULL,
  `stock` int NOT NULL,
  `imagen` blob,
  `categoria_id` int NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `Productos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `Categorias` (`id_categoria`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Productos`
--

LOCK TABLES `Productos` WRITE;
/*!40000 ALTER TABLE `Productos` DISABLE KEYS */;
INSERT INTO `Productos` VALUES (1,'Smartphone Galaxy S21','Teléfono móvil de alta gama con pantalla AMOLED',999.99,20,NULL,1),(2,'TV LED 55\"','Televisor LED de 55 pulgadas con resolución 4K',699.99,15,NULL,1),(3,'Silla Ergonómica','Silla de oficina ajustable y cómoda',129.99,50,NULL,2),(4,'Vestido Floral','Vestido de verano con diseño floral',49.99,70,NULL,3),(5,'Auto de Juguete','Auto a control remoto con batería recargable',29.99,40,NULL,4);
/*!40000 ALTER TABLE `Productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `rol` enum('admin','cliente') NOT NULL,
  `correo` varchar(100) NOT NULL,
  `fecha_registro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `nombre_usuario` (`nombre_usuario`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'kevin','1664','admin','kevin_ruiz_sanchez@hotmail.com','2025-01-09 07:28:30'),(2,'bill','bill1234','admin','borybill@hotmail.com','2025-01-09 07:28:30'),(3,'lucia_martinez','lucia1234','cliente','lucia.martinez@hotmail.com','2025-01-09 07:28:30'),(4,'pedro_garcia','pedro1234','cliente','pedro.garcia@hotmail.com','2025-01-09 07:28:30'),(5,'ana_lopez','ana1234','cliente','ana.lopez@hotmail.com','2025-01-09 07:28:30');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-15  7:28:29
