-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.44-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for shop_db
CREATE DATABASE IF NOT EXISTS `shop_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `shop_db`;

-- Dumping structure for table shop_db.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `icon_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table shop_db.category: ~21 rows (approximately)
DELETE FROM `category`;
INSERT INTO `category` (`id`, `icon_name`, `name`, `status`) VALUES
	(1, NULL, 'Khoa học kỹ thuật', 1),
	(2, NULL, 'Xây dựng', NULL),
	(3, NULL, 'Cơ khí - Ô tô - Tự động hóa', NULL),
	(4, NULL, 'Công nghệ thực phẩm - Dinh dưỡng', 1),
	(5, NULL, 'Dầu khí', 1),
	(6, NULL, 'Dệt may - Da giày - Thời trang', 1),
	(7, NULL, 'Điện - Điện tử - Điện lạnh', 1),
	(8, NULL, 'Giáo dục - Đào tạo', 1),
	(9, NULL, 'Hóa học - Hóa sinh', 1),
	(10, NULL, 'IT Phần cứng - Mạng', 1),
	(11, NULL, 'IT Phần mềm', 1),
	(12, NULL, 'Khai thác năng lượng - Khoáng sản - Địa chất', 1),
	(13, NULL, 'Kiến trúc - Thiết kế nội ngoại thất', 1),
	(14, NULL, 'Môi trường - Xử lý chất thải', 1),
	(15, NULL, 'Nông - Lâm - Ngư nghiệp', 1),
	(16, NULL, 'Sản xuất - Lắp ráp - Chế biến', 1),
	(17, NULL, 'Thiết kế - Sáng tạo nghệ thuật', 1),
	(18, NULL, 'Vận hành - Bảo trì - Bảo dưỡng', 1),
	(19, NULL, 'Vận Tải - Lái xe - Giao nhận', 1),
	(20, NULL, 'Xuất bản - In ấn', 1),
	(21, NULL, 'Y tế - Chăm sóc sức khỏe', 1),
	(22, NULL, 'ttertret', NULL);

-- Dumping structure for table shop_db.contact
CREATE TABLE IF NOT EXISTS `contact` (
  `contact_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- Dumping data for table shop_db.contact: ~6 rows (approximately)
DELETE FROM `contact`;
INSERT INTO `contact` (`contact_id`, `name`, `email`, `address`, `telephone`, `categoryId`, `categoryName`, `description`) VALUES
	(27, 'Rashford', 'MU@email.com', 'Carlingtonx', '123456789', 0, NULL, NULL),
	(28, 'Grelish', 'Manchester City', 'Ethiadx', '8776889999', 0, NULL, NULL),
	(29, 'Mohamed Sala', 'Liverpool', 'Liverpool', '8776889999', 0, NULL, NULL),
	(35, 'Suarez ', 'Turkey', 'Sansiro', '456 8765 43', 0, NULL, NULL),
	(37, 'Terry ', 'England', 'London', '456 8765 43', 0, NULL, NULL),
	(39, 'Kieran Trippier', 'fff', 'Tottenham Hotspur', '342 8545 43', 0, NULL, NULL);

-- Dumping structure for table shop_db.country
CREATE TABLE IF NOT EXISTS `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `countryName` varchar(100) NOT NULL,
  `population` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Dumping data for table shop_db.country: ~11 rows (approximately)
DELETE FROM `country`;
INSERT INTO `country` (`id`, `countryName`, `population`) VALUES
	(1, 'Hongkong', 23000000),
	(2, 'Vi&#7879;t Nam', 91000000),
	(3, 'SIngapore', 456789),
	(4, 'England', 45000000),
	(5, 'Germany', 43000000),
	(6, 'Australia', 27000000),
	(7, 'Myanma', 678098),
	(8, 'Hungary', 7000000),
	(9, 'Russia', 234098000),
	(10, 'China', 34000000),
	(11, 'Spain', 456000);

-- Dumping structure for table shop_db.customer
CREATE TABLE IF NOT EXISTS `customer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- Dumping data for table shop_db.customer: ~18 rows (approximately)
DELETE FROM `customer`;
INSERT INTO `customer` (`id`, `name`, `email`, `address`) VALUES
	(1, 'Rashford', 'abc@gmail.com', 'Ha Noi'),
	(3, 'Jack Grealish', 'efg@gmail.com', 'London'),
	(4, 'Harry Potter', 'Potter@gmail.com', 'England'),
	(5, 'Thierry Henry', 'abc@gmail.com', 'Frances'),
	(6, 'Darius', 'darius@gmail.com', 'New York - USA'),
	(7, 'Rooney', 'rooney@gmail.com', 'London - England'),
	(8, 'Theo Walcott', 'Walcott@yahoo.com', 'Inglaterra'),
	(10, 'Robin Van Persie', 'Robin Van Persie@yahoo.com', 'Holanda'),
	(11, 'Songuku', 'email@gmail.com', 'Japanese'),
	(12, 'Capital', 'email@gmail.com', 'USA'),
	(13, 'Lee Byung Hun', 'email@gmail.com', 'Korea'),
	(14, 'Jason Statham', 'email@gmail.com', 'England'),
	(15, 'Micky', 'email@gmail.com', 'Hollywood'),
	(16, 'Donal Duck', 'email@gmail.com', 'Hollywood'),
	(17, 'Tom', 'email@gmail.com', 'house'),
	(18, 'Jerry', 'email@gmail.com', 'house'),
	(19, 'Donal Trump', 'email@gmail.com', 'house'),
	(20, 'name0', 'email0', 'address0');

-- Dumping structure for table shop_db.employees
CREATE TABLE IF NOT EXISTS `employees` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table shop_db.employees: ~0 rows (approximately)
DELETE FROM `employees`;

-- Dumping structure for table shop_db.emp_tbl
CREATE TABLE IF NOT EXISTS `emp_tbl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `telephone` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- Dumping data for table shop_db.emp_tbl: ~3 rows (approximately)
DELETE FROM `emp_tbl`;
INSERT INTO `emp_tbl` (`id`, `name`, `email`, `address`, `telephone`) VALUES
	(25, 'Peter Khanh', 'tkhn2020@gmail.com', '25 Hangang-daero 23-gil, Yongsan-gu, Seoul', '0978900333'),
	(26, 'KH dau xic', 'abc@gmail.com', 'Kkdkfdfdfdfsd', '0398460398'),
	(27, 'Tripper', 'abc@gmail.com', 'Kkdkfdfdfdfsd', '0398460398');

-- Dumping structure for table shop_db.meals
CREATE TABLE IF NOT EXISTS `meals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `strMeal` varchar(50) CHARACTER SET utf8mb4 DEFAULT NULL,
  `strArea` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `strDescription` longtext CHARACTER SET utf8mb4,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table shop_db.meals: ~13 rows (approximately)
DELETE FROM `meals`;
INSERT INTO `meals` (`id`, `category`, `strMeal`, `strArea`, `strDescription`) VALUES
	(1, 'C0101', 'Chai', '18', 'Good product'),
	(2, 'C0104', 'Ikura', '31', 'Good'),
	(3, 'C0105', 'Queso Cabrales', '21', 'Good'),
	(4, 'C0105', 'Queso Manchego La Pastora', '38', 'Good'),
	(6, 'C0101', 'Chang', '19', 'best sell product'),
	(7, 'C0101', 'Aniseed Syrup', '10', 'new produced'),
	(8, 'C0102', 'Chef Anton\'s Cajun Seasoning', '22', 'popular product'),
	(9, 'C0102', 'Chef Anton\'s Gumbo Mix', '21', 'Good For life'),
	(21, 'C0103', 'Northwoods Cranberry Sauce', '40', 'Good'),
	(34, 'C0103', 'Uncle Bob\'s Organic Dried Pears', '30', 'Good'),
	(45, 'C0103', 'Grandma\'s Boysenberry Spread', '25', 'Good'),
	(55, 'C0104', 'Mishi Kobe Niku', '97', 'Good'),
	(56, 'sdfdsf', 'sdfsdf', 'rêtrt', 'ểtrt');

-- Dumping structure for table shop_db.my_books
CREATE TABLE IF NOT EXISTS `my_books` (
  `id` int(11) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table shop_db.my_books: ~0 rows (approximately)
DELETE FROM `my_books`;

-- Dumping structure for table shop_db.person
CREATE TABLE IF NOT EXISTS `person` (
  `pid` int(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  PRIMARY KEY (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

-- Dumping data for table shop_db.person: ~5 rows (approximately)
DELETE FROM `person`;
INSERT INTO `person` (`pid`, `username`, `password`, `age`, `gender`, `city`) VALUES
	(5, 'Peter', '9876545678', 23, 'M', 'Allahabad'),
	(6, 'Lampard', 'ádfsdgfghjghk', 47, 'F', 'Ghaziabad'),
	(7, 'Richard Lison', '424234214213421', 34, 'F', 'Allahabad'),
	(8, 'Singapore', '123123123', 34, 'F', 'Varanasi'),
	(10, 'khanhupdate', 'sdfsfsdfsd', NULL, NULL, 'city');

-- Dumping structure for table shop_db.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,1) NOT NULL,
  `quantity` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Dumping data for table shop_db.product: ~9 rows (approximately)
DELETE FROM `product`;
INSERT INTO `product` (`id`, `name`, `price`, `quantity`, `description`, `status`) VALUES
	(1, 'Mobile 1', 1.0, 5, 'description 2', 1),
	(2, 'Mobile 2', 2.0, 2, 'description 1', 1),
	(3, 'Mobile 3', 11.0, 9, 'description 3', 1),
	(4, 'Laptop 4', 2.0, 15, 'description 9', 1),
	(5, 'Computer 1', 16.0, 8, 'description 7', 0),
	(6, 'Laptop 1', 22.0, 8, 'description 7', 0),
	(7, 'Laptop 2', 4.0, 11, 'description 8', 0),
	(8, 'Laptop 3', 9.0, 15, 'description 9', 1),
	(9, 'Computer 2', 3.0, 8, 'description 7', 0);

-- Dumping structure for table shop_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `gender` bit(1) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Dumping data for table shop_db.users: ~7 rows (approximately)
DELETE FROM `users`;
INSERT INTO `users` (`id`, `address`, `email`, `enabled`, `fullname`, `gender`, `password`, `telephone`, `username`) VALUES
	(1, 'Ha Noi', 'abc@email.com', b'1', 'Admin', b'1', '$2a$10$dwSr42e4uHN2rk3H8G1xOuEb3pQrO1ECWAkXXWwA8czoKBhieXVo2', '89655', 'Admin'),
	(7, NULL, 'dfdfdf@dd.com', NULL, NULL, NULL, 'matkhau', NULL, 'Tên '),
	(8, NULL, 'khanhnv1980@gmail.com', NULL, NULL, NULL, '$2b$10$PuU9tSXcOzDfVYmAT.bfR.3.Z57BP3FTnO7XoeEtTS/VKqrr4UTx2', NULL, 'ptk'),
	(9, NULL, 'yuanfei0704@126.com', NULL, NULL, NULL, '$2b$10$S.2UfTZ2mWf9bT1QzCaA..5ExwIWi07wpn4gla.Un/JOuYa71GJim', NULL, 'ttttt'),
	(10, NULL, 'dfdfdf@dd.com', NULL, NULL, NULL, '$2b$10$3YwOQWLnZ1U4qZPLs.ticu7BmjlDR5CJr.pK645OM1WyMogf5TTjK', NULL, 'ptk'),
	(11, NULL, 'sales.04@asahi-plating.com.vn', NULL, NULL, NULL, '$2b$10$TJ6pGGTAoPayoG33yvA49e7weD09HCRTi4pZOgDGIOIXXCz/DUXsq', NULL, 'ptk'),
	(12, NULL, 'dfdfdf@dd.com', NULL, NULL, NULL, '$2b$10$EXyWPNCj6EE2zF.JW5irWunjQG30NWfQwxTXIBSYTTenaat5/vrq.', NULL, 'ptk');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
