const PRODUCTS = require("../model/products.js");
let products = new PRODUCTS();

const productsController = {

	listByType: (req, res) => {
		if (!req.query.type) {
			res.send({ status: "Fail", data: "El atributo Type está vacío" });
		} else {
			let responsePromise = products.selectByType(req.query.type);
			responsePromise.then((response) => { res.send(response); });
		}
	},

    
	getCategory: (req, res) => {
		if (!req.query.category) {
			res.send({ status: "Fail", data: "El atributo category está vacío" });
		} else {
			let responsePromise = products.selectCategory(req.query.category);
			responsePromise.then((response) => { res.send(response); });
		}
	},


	listSizesExamples: (type) => {
		return `Aqui se mostrarán los ejemplos de tamaño para el tipo ${type}`;
	},


	listProductsInStock: (req, res) => {

		let responsePromise = products.selectInStock();
		responsePromise.then((response) => { res.send(response); });

	},


	listAll: (req, res) => {
		let responsePromise = products.selectAll();
		responsePromise.then((e) => {
			res.send(e);
		}).catch();
	},


	deleteProduct: (req, res) => {
		let responsePromise = products.deleteById(req.body.id);
		responsePromise.then((response) => {
			if (response.status == "OK") {
				response.data = "Producto eliminado";
			}
			res.send(response);
		});
	},


	insertNewProduct: (req, res) => {
		if (req.body == false) { //validación
			res.send({ status: "Fail", data: "Error en los datos del formulario" });

		} else {
			let data = {
				titulo: `"${req.body.title || ""}"`,
				precio: `"${req.body.price || " "}"`,
				img: `"${req.body.img_url || " "}"`,
				stock: Number(Boolean(req.body.stock)),
				prod_id: "null",
			};
			let category = req.body.category;

			let responsePromise = products.insert(category, data);
			responsePromise.then((data) => {
				if (data.status == "OK") {
					data.data = "Datos guardados";
				}
				res.send(data);
			});
		}
	},


	updateProduct: (req, res) => {

		try {
			let data = {
				titulo: `"${req.body.title || ""}"`,
				precio: `${req.body.price || " "}`,
				img: `"${req.body.img_url || " "}"`,
				stock: Number(Boolean(req.body.stock)),
				prod_id: req.body.id,
			};
			let category = req.body.category;
			let id = req.body.id;

			let responsePromise = products.updateById(id, category, data);
			responsePromise.then((data) => {
				if (data.status == "OK" && data.data.affectedRows != 0) {
					data.data = "Datos actualizados";
				} else if (data.data.affectedRows == 0) {
					data.status = "Fail";
					console.log(data.data);
					data.data = "No hay filas que afectar";
				} else {
					data.status = "Fail";
					console.log(data.data);
					data.data = "Error al consultar";
				}
				res.send(data);
			}).catch((e) => {
				res.send({ status: "Fail", data: "Error al consultar" });
			});
		} catch (e) {
			res.send({ status: "Fail", data: "Error en los datos del formulario", e });
		}
	}
};



module.exports = productsController;