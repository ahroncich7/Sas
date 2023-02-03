CREATE DATABASE sakito

USE sakito

CREATE TABLE `categoria` (
 `cat_id` int(5) NOT NULL AUTO_INCREMENT,
 `nombre_cat` varchar(15) DEFAULT NULL,
 `small_price` int(10) DEFAULT NULL,
 `small_cap` varchar(10) DEFAULT NULL,
 `size_img` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'https://previews.123rf.com/images/chotwitnote/chotwitnote1801/chotwitnote180100477/92643317-conjunto-del-vector-de-vajilla-en-la-ilustraci%C3%B3n-blanca-del-fondo-.jpg',
 `medium_price` int(10) DEFAULT NULL,
 `medium_cap` varchar(10) DEFAULT NULL,
 `large_price` int(10) DEFAULT NULL,
 `large_cap` varchar(10) DEFAULT NULL,
 PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8


CREATE TABLE `productos` (
 `titulo` varchar(30) DEFAULT NULL,
 `precio` int(10) DEFAULT NULL,
 `img` varchar(3000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
 `stock` tinyint(1) DEFAULT NULL,
 `prod_id` int(5) NOT NULL AUTO_INCREMENT,
 `cat_id2` int(10) NOT NULL,
 PRIMARY KEY (`prod_id`),
 KEY `cat_id2` (`cat_id2`),
 CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`cat_id2`) REFERENCES `categoria` (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8