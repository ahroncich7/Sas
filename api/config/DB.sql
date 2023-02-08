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


/*INSERT EXAMPLES*/ 

INSERT INTO categoria VALUES (
    null, 
    "Tazas",
    1000,
    200,
    "https://i.ibb.co/ZhQP7Wc/tazas.png",
    1500,
    250,
    2000,
    3000
);

INSERT INTO categoria VALUES (
    null, 
    "Cuencos",
    1300,
    200,
    "https://i.ibb.co/pKRXFhj/cuencos.png",
    1900,
    250,
    2200,
    300
);

INSERT INTO categoria VALUES (
    null, 
    "Platos",
    800,
    200,
    "https://i.ibb.co/ZxPhKgD/platos.png",
    1200,
    250,
    2800,
    300
);

INSERT INTO categoria VALUES (
    null, 
    "Bandejas",
    1800,
    300,
    "https://i.ibb.co/7yWHrr9/bandejas.png",
    2300,
    360,
    2900,
    480
);

INSERT INTO categoria VALUES (
    null, 
    "Ensaladeras",
    1000,
    200,
    "https://i.ibb.co/rtzf18Y/ensaladeras.png",
    1500,
    250,
    2000,
    300
);

INSERT INTO categoria VALUES (
    null, 
    "Floreros",
    1000,
    200,
    "https://i.ibb.co/SRTdMRz/floreros.png",
    1500,
    250,
    2000,
    300
);

INSERT INTO categoria VALUES (
    null, 
    "Teteras",
    1000,
    200,
    "https://i.ibb.co/tLD8mV7/teteras.png",
    1500,
    250,
    2000,
    300
);

INSERT INTO categoria VALUES (
    null, 
    "Objetos",
    1000,
    200,
    "https://i.ibb.co/pxH8Wt0/objetos.png",
    1500,
    250,
    2000,
    300
);

INSERT INTO categoria VALUES (
    null, 
    "Arte",
    null,
    null,
    null,
    null,
    null,
    null,
    null
);