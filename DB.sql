CREATE DATABASE sakito

USE sakito

CREATE TABLE categoria(
    cat_id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
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
   	img VARCHAR(30),
	prod_id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cat_id2 INT(10) NOT NULL AUTO_INCREMENT,
	    FOREIGN KEY (cat_id2) REFERENCES categoria (cat_id)
);
