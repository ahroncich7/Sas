const PRODUCTS = require("../model/products.js");
let products = new PRODUCTS();

const productsController = {

    listByType: (req, res) => {
        if (!req.query.type) {
            res.status(400).send({ message: "El atributo Type está vacío" });
        } else {
            let responsePromise = products.selectByType(req.query.type);
            responsePromise.then((response) => res.status(200).send({ data: response }))
                .catch(err => res.status(500).send({ message: err }));
        }
    },


    getCategory: (req, res) => {
        if (!req.query.category) {
            res.status(400).send({});
        } else {
            let responsePromise = products.selectCategory(req.query.category);
            responsePromise.then((response) => res.status(200).send({ data: response }))
                .catch(err => res.status(500).send({ message: err }));
        }
    },


    listProductsInStock: (req, res) => {
        let responsePromise = products.selectInStock();
        responsePromise.then((response) => res.status(200).send({ data: response }))
            .catch(err => res.status(500).send({ message: err }));

    },


    listAll: (req, res) => {
        let responsePromise = products.selectAll();
        responsePromise.then((response) => res.status(200).send({ data: response }))
            .catch(err => res.status(500).send({ message: err }));
    },


    deleteProduct: (req, res) => {
        let responsePromise = products.deleteById(req.body.id);
        responsePromise.then((response) => res.status(200).send({ data: response }))
            .catch(err => res.status(500).send({ message: err }));
    },


    insertNewProduct: (req, res) => {
        if (!req.body) {
            res.status(400).send({ message: "Error en los datos del formulario" });

        }

        let data = {
            titulo: `"${req.body.title || ""}"`,
            precio: `"${req.body.price || " "}"`,
            img: `"${req.body.img_url || " "}"`,
            stock: Number(Boolean(req.body.stock)),
            prod_id: "null",
        };
        let category = req.body.category;

        let responsePromise = products.insert(category, data);
        responsePromise.then((response) => res.status(200).send({ data: response }))
            .catch(err => res.status(500).send({ message: err }));
    },


    updateProduct: (req, res) => {

        if (!req.body) {
            res.status(400).send({ message: "Error en los datos del formulario" });
        }

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
        responsePromise.then((response) => res.status(200).send({ data: response }))
            .catch(err => res.status(500).send({ message: err }));
    },


    listSizesExamples: (type) => {
        return `Aqui se mostrarán los ejemplos de tamaño para el tipo ${type}`;
    },
};



module.exports = productsController;