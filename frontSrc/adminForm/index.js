import { formController } from "./formController.js";
import { formProduct } from "./formProduct.js";
import { deleteProduct, getAllProducts, insertDataInDB, updateDataInDB } from "../../src/services/apiRequests.js";
import { failAlert, succesAlert } from "../../src/services/alerts.js";
import { productView } from "./productView.js";

updateList();
//Funcion guardar

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
}


//Actualizar

function updateList() {
    productView.productsContainer.innerHTML = "";

    let apiPromise = getAllProducts();

    apiPromise
        .then((response => {
            response.data.forEach((productData) => {
                let product = new formProduct(productData);
                
                product.getEditButton().addEventListener("click", () => {
                    formCtrl.setDataInForm(productData);
                    succesAlert("Datos cargados en formulario");
                });

                product.getDeleteButton().addEventListener("click", () => {
                    console.log("delete");
                    let deletePromise = deleteProduct(productData.prod_id);
                    deletePromise
                        .then(() => { succesAlert("Producto eliminado"), updateList(); })
                        .catch(e => failAlert(e));
                });
            });
            window.scrollTo(0, 0);
        }))
        .catch(err => failAlert(err));
}


