import { deleteProductInDb, getAllProducts, insertDataInDB, updateDataInDB, updateMasivePrices } from "../../services/apiRequest.js";
import { failAlert, succesAlert } from "../../services/alerts.js";

async function run() {
    const template = await fetch("/components/newAdmin/productlist.html");
    const content = await template.text();
    // document.querySelector("#root").innerHTML = content;

    function Controller() {
        // Reactive properties

        const self = this;

        self.setStyle = (product) => {
            if (product.stock) {
                product.container.style.backgroundColor = "lightgreen";
            } else {
                product.container.style.backgroundColor = "lightpink";
            }
        };

        self.save = (value) => {

            let data = {
                category: self.selectedProduct.nombre_cat,
                id: self.selectedProduct.prod_id || "-",
                img_url: self.selectedProduct.img,
                price: self.selectedProduct.precio,
                title: self.selectedProduct.titulo,
                stock: self.selectedProduct.stock
            };

            if (!self.validateForm(data)) {
                failAlert("Complete todos los campos");
                return;
            }

            let apiPromise = data.id != "-" ? updateDataInDB(data) : insertDataInDB(data);

            apiPromise
                .then(() => {
                    succesAlert("Elemento modificado en DB"),
                        self.updateList(),
                        self.selectedProduct.titulo = "";
                    self.selectedProduct.nombre_cat = "";
                    self.selectedProduct.prod_id = "";
                    self.selectedProduct.img = "";
                    self.selectedProduct.precio = "";
                    self.selectedProduct.stock = "";

                })
                .catch(() => failAlert("Hubo un problema"));
        };

        self.edit = (product) => {
            Object.assign(self.selectedProduct, product);
            window.scrollTo(0, 0);
            succesAlert("Datos cargados en formulario");
        };

        self.delete = (id) => {
            let deletePromise = deleteProductInDb(id);
            deletePromise
                .then(() => { succesAlert("Producto eliminado"), self.updateList(); })
                .catch(e => failAlert(e));
        };

        self.selectedProduct = {
            nombre_cat: "",
            prod_id: "-"
        };

        self.search = (value) => {
            self.filteredRows = self.rows.filter(row => row.titulo.toLowerCase().includes(value.toLowerCase()) ||
                row.prod_id.toString().includes(value) ||
                row.nombre_cat.toLowerCase().includes(value.toLowerCase()));
        };


        self.selectAll = () => {
            self.filteredRows.forEach((row) => {
                row.selected = !row.selected;
            });
        };

        self.changePrice = (price) => {
            let ids = [];
            self.filteredRows.forEach((row) => {
                if (row.selected) {
                    ids.push(row.prod_id);
                }
            });

            let priceMultiplier;
            if (price >= 0) {
                priceMultiplier = 1 + (Math.abs(price) / 100);
            } else {
                priceMultiplier = 1 - (Math.abs(price) / 100);
            }


            updateMasivePrices(ids, priceMultiplier).then((result) => {
                succesAlert("Se actualizaron los precios existosamente");
                self.updateList();
            }).catch((err) => { console.log(err); });

        };

        self.rows = [];

        self.updateList = () => {

            let apiPromise = getAllProducts();

            apiPromise
                .then((response => {
                    self.rows = [];
                    response.data.forEach((productData) => {
                        self.rows.push(productData);
                        self.filteredRows = self.rows;

                    });
                    window.scrollTo(0, 0);
                }))
                .catch(err =>
                    failAlert(err)
                );
        };

        self.updateList();

        self.validateForm = (data) => {
            let form_is_valid = true;
            // Object.values(data).forEach((e) => {
            //     if (!e) {
            //         form_is_valid = false;
            //     }
            // });
            return form_is_valid;
        };


        // Component template
        return content;
    }
    lemonade.render(Controller, document.getElementById("root"));
}
run();
