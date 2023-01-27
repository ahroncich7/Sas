CREATE DATABASE sakito

USE sakito

CREATE TABLE categoria (
    cat_id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_cat VARCHAR(15),
    img VARCHAR(2000),
   	small_price int(10),
    small_cap VARCHAR(10),
    medium_price int(10),
    medium_cap VARCHAR(10),
    large_price int(10),
    large_cap VARCHAR(10)
);

CREATE TABLE productos(
    titulo VARCHAR(30),
    precio INT(10),
   	img VARCHAR(1500),
	prod_id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cat_id2 INT(10) NOT NULL,
	    FOREIGN KEY (cat_id2) REFERENCES categoria (cat_id)
);

INSERT INTO categoria VALUES (
    null, 
    "Tazas",
    1000,
    200,
    1500,
    250,
    2000,
    300
);

INSERT INTO categoria VALUES (
    null, 
    "Cuencos",
    1300,
    200,
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
    1500,
    250,
    2000,
    300
);