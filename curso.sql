-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2022 a las 15:18:34
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `curso`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `articulo` varchar(255) DEFAULT NULL,
  `precio` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `descripcion`, `articulo`, `precio`, `userId`, `createdAt`, `updatedAt`) VALUES
(4, 'PlayStation 5 version digital edicion horizon forbiden west', 'PlayStation 5', 'RD$25,500.00', 0, '2022-11-20 23:02:20', '2022-11-20 23:02:20'),
(5, 'Suscripcion 6 Meses a PlayStationPlus', 'Suscripcion 6 Meses', 'RD$2,050.00', 0, '2022-11-20 23:02:20', '2022-11-20 23:02:20'),
(6, 'Control Xbox series S yellow ', 'Control Xbox', 'RD$1,505.00', 0, '2022-11-20 23:02:20', '2022-11-20 23:02:20'),
(7, 'Driver Logitech PC Xbox ', 'Driver Logitech', 'RD$18,000.00', 0, '2022-11-20 23:02:20', '2022-11-20 23:02:20'),
(14, 'PlayStation 4, FAT, 500GB ', 'PS4 FAT', 'RD$9,950', 0, '2022-11-17 01:09:26', '2022-11-18 15:28:26'),
(16, 'Nintendo Switch, 500GB+ Nintendo Direct', 'Nintendo Switch', 'RD$16,000', 0, '2022-11-18 15:14:24', '2022-11-18 15:27:08'),
(17, 'CD Horizon Forbiden West PS4', 'Horizon Forbiden West', 'RD$1,800.00', 0, '2022-11-20 23:06:53', '2022-11-20 23:06:53'),
(18, 'CD Forza Horizon 5 Xbox', 'Forza Horizon 5 ', 'RD$1,050.00', 0, '2022-11-20 23:06:53', '2022-11-20 23:06:53'),
(19, 'Suscripcion GamePass 12 meses ', 'Xbox GamePass', 'RD$2,505.00', 0, '2022-11-20 23:06:53', '2022-11-20 23:06:53'),
(20, 'Driver Logitech PC PS4  ', 'Driver Logitech', 'RD$19,000.00', 0, '2022-11-20 23:06:53', '2022-11-20 23:06:53'),
(21, 'Mouse Fantech Hx14 RBG Programable color blanco', 'Mouse Fantech Hx14', 'RD$1,500', 1, '2022-11-21 15:00:13', '2022-11-21 15:00:13'),
(22, 'Cable 10 pies HDMI 4k', 'HDMI', 'RD$800', 1, '2022-11-22 23:34:40', '2022-11-22 23:34:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registros`
--

CREATE TABLE `registros` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `registros`
--

INSERT INTO `registros` (`id`, `email`, `password_hash`, `createdAt`, `updatedAt`) VALUES
(1, 'fabi@gmail.com', '$2b$10$lp/8XzaJcIXiVxNH3dki0OsirR5VgokISXk7txMm3IAhmcw2OEUX6', '2022-11-21 14:54:42', '2022-11-21 14:54:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221116195807-create-articulo.js'),
('20221118233139-create-registro.js');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `registros`
--
ALTER TABLE `registros`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `registros`
--
ALTER TABLE `registros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
