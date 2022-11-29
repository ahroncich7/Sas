const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sakito'
});

class DB {
    constructor() {
        this.connection = connection
    }

    selectByType(type) {
        let query =
            `SELECT * FROM productos 
        JOIN categoria ON productos.cat_id2 = categoria.cat_id 
        WHERE categoria.nombre = "${type}"`

        try {
            return this.sendQueryToDB(query)
        } catch (e) {
            console.log("error conexion", e)
            return ("error")
        }
    }

    insert(productData) {

        let data = Object.keys(productData) 
        let query = `INSERT INTO productos VALUES (${Object.values(productData)})`

        try {
            return this.sendQueryToDB(query)
        } catch (e) {
            console.log("error conexion", e)
            return ("error")
        }

    }


    sendQueryToDB(query) {
        let response = {}
        return new Promise((resolve, rejection) => {
            this.connection.query(query, (error, results) => {
                console.log(results)
                if (!error && results != {}) {
                    response = {
                        status: "OK",
                        data: results
                    }
                } else {
                    response = {
                        status: "Fail",
                        data: error
                    }
                }
                console.log(results)
                resolve(response)
            })

        })
    }

}



module.exports = DB
