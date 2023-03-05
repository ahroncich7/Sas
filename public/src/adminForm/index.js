import { formController } from "./formController.js";
import { formProduct } from "./formProduct.js";
import { deleteProductInDb, getAllProducts, insertDataInDB, updateDataInDB } from "../../src/services/apiRequests.js";
import { failAlert, succesAlert } from "../services/alerts.js";
import { productView } from "./productView.js";

updateList();

//Save from form

let form = document.getElementById("admin_form");

let formCtrl = new formController(form);

formCtrl.setOnClickEvent(formHandling);

function formHandling(data) {

    if (!formCtrl.validateForm()) {
        failAlert("Complete todos los campos");
        return;
    }

    let apiPromise = data.id === "-" ? insertDataInDB(data) : updateDataInDB(data);

    apiPromise
        .then(() => { succesAlert("Elemento modificado en DB"), updateList(); })
        .catch(() => failAlert("Hubo un problema"));
    
    formCtrl.setDataInForm({});
}


//Update

function updateList() {
    productView.productsContainer.innerHTML = "";

    let apiPromise = getAllProducts();

    apiPromise
        .then((response => {
            response.data.forEach((productData) => {
                let product = new formProduct(productData);
                product.getEditButton().addEventListener("click", () => {
                    editProduct(productData);

                });

                product.getDeleteButton().addEventListener("click", () => {
                    deleteProduct(productData.prod_id);
                });
            });
            window.scrollTo(0, 0);
        }))
        .catch(err => failAlert(err));
}


//Buttons Functions 

function deleteProduct(id) {
    let deletePromise = deleteProductInDb(id);
    deletePromise
        .then(() => { succesAlert("Producto eliminado"), updateList(); })
        .catch(e => failAlert(e));
}

function editProduct(productData) {
    formCtrl.setDataInForm(productData);
    succesAlert("Datos cargados en formulario");
}

