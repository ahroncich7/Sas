const mysql = require("mysql");
const CONFIG = require("../config/config.js");

const DBCONFIG = {
    host: CONFIG.DB_HOST,
    user: CONFIG.DB_USER,
    database: CONFIG.DB_DATABASE,
    password: CONFIG.DB_PASSWORD
};

class dbConnection {

    constructor() {
        try {
            this.connection = mysql.createPool(DBCONFIG);
            this.connection.query("SHOW DATABASES", (error, results) => {
                if (!error) {
                    console.log("Base de datos funcionando");
                } else {
                    console.log("No se pudo conectar la base de datos: ", error.message);
                }
            });

        } catch (e) {
            console.log("No se pudo crear conexion con base de datos", e);
        }

    }

    query(query) {

        return new Promise((resolve, reject) => {
            this.connection.query(query, (error, results) => {
                if (!error) {
                    resolve(results);
                } else {
                    reject(error || "No data");
                }
            });
        });
    }
}

module.exports = dbConnection;