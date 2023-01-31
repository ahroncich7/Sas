const dbConnection = require("../config/databaseConnection.js");


class products {
    constructor() {
        this.db = new dbConnection();
    }

    selectByType(type) {
        let query =
            `SELECT * FROM productos 
        JOIN categoria ON productos.cat_id2 = categoria.cat_id 
        WHERE categoria.nombre_cat = "${type}"`;
        return this.db.query(query);
    }

    selectCategory(category) {

        let query =
            `SELECT * FROM categoria  
        WHERE categoria.nombre_cat = "${category}"`;

        return this.db.query(query);
    }


    insert(category, productData) {
        let query = `INSERT INTO productos VALUES (${Object.values(productData)}, (SELECT cat_id FROM categoria WHERE categoria.nombre_cat = "${category}"))`;
        return this.db.query(query);
    }


    selectAll() {
        let query =
            `SELECT * FROM productos 
        JOIN categoria ON productos.cat_id2 = categoria.cat_id`;
        return this.db.query(query);
    }


    deleteById(id) {
        let query =
            `DELETE FROM productos WHERE prod_id=${id}`;
        return this.db.query(query);
    }


    selectInStock() {
        let query =
            `SELECT * FROM productos 
        JOIN categoria ON productos.cat_id2 = categoria.cat_id 
        WHERE productos.stock = "1"`;
        return this.db.query(query);
    }

    updateById(id, category, productData) {
        let query = `UPDATE productos SET 
            ${Object.keys(productData)[0]} = ${Object.values(productData)[0]},
            ${Object.keys(productData)[1]} = ${Object.values(productData)[1]},
            ${Object.keys(productData)[2]} = ${Object.values(productData)[2]},
            ${Object.keys(productData)[3]} = ${Object.values(productData)[3]},
            ${Object.keys(productData)[4]} = ${Object.values(productData)[4]},
            cat_id2 = (SELECT cat_id FROM categoria WHERE categoria.nombre_cat = "${category}")
            WHERE productos.prod_id = ${id}`;


        return this.db.query(query);
    }
}

module.exports = products;
