const mysql = require("mysql");
// const DBCONFIG = {
//     host: 'db4free.net',
//     user: 'sasdbuser',
//     password: 'sasdbpass',
//     database: 'sas_db'
// }

const DBCONFIG = {
	host: "bxdraymchrkn0xyjbvgs-mysql.services.clever-cloud.com",
	user: "u02ffgz5temaryfh",
	password: "03pZkHz2WCnVzrdf9iD2",
	database: "bxdraymchrkn0xyjbvgs"
};

// const DBCONFIG = {
//     host: '127.0.0.1',
//     user: 'root',
//     password: '',
//     database: 'sakito'
// }

class dbConnection {

	constructor() {
		try {
			this.connection = mysql.createPool(
				DBCONFIG
			);
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
		// console.log("La query es :", query)
		let response = {
			status: "Fail",
			data: ""
		};

		if (this.connection) {
			return new Promise((resolve, rejection) => {
				this.connection.query(query, (error, results) => {
					if (!error && results != {}) {
						response = {
							status: "OK",
							data: results
						};
					} else {
						response.data = error;
					}
					resolve(response);
				});
			});
		} else {
			response.data = "Base de datos desconectada";
			return new Promise((resolve, rej) => resolve(response));
		}
	}
}

module.exports = dbConnection;