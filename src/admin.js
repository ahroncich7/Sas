import { adminCard } from "./adminCard.js";
import { adminForm } from "./adminForm.js";
import { failAlert, succesAlert } from "./services/alerts.js";
import * as request from "./services/apiRequests.js";


alert("hola");
const admForm = new adminForm("admin_form");
const prodCardsCont = document.getElementById("products");
updateProducts();


admForm.submmitBtn.addEventListener("click", () => {
    admForm.getFormData;

    if (!admForm.validateForm()) { return; }

    if (admForm.data.id != "-") {

        const requestUpdate = request.updateDataInDB(admForm.data);

        requestUpdate
            .then(($response) => {
                succesAlert($response.data);
                updateProducts();

            })
            .catch(e => failAlert(3));

    } else {
        const requestInsert = request.insertDataInDB(admForm.data);

        requestInsert
            .then(($response) => {
                succesAlert("Elemento creado");
                updateProducts();

            })
            .catch(e => failAlert(e.message));
    }


});


function populateProductsCards(productsList) {
    prodCardsCont.innerHTML = "";
    productsList.forEach(productData => {
        let card = new adminCard(productData, prodCardsCont);

        card.editBtn.addEventListener("click", () =>

            admForm.setDataInForm(productData));

        card.deleteBtn.addEventListener("click", () => {

            const requestDelete = request.deleteProduct(productData.prod_id);
            requestDelete
                .then(($response) => {
                    console.log($response);
                    succesAlert("Elemento eliminado");
                    updateProducts();

                }).catch(e => failAlert(e.message));
        });
    });
}


function updateProducts() {
    let productsPromise = request.getAllProducts();
    productsPromise
        .then((response) => {
            console.log(response);
            populateProductsCards(response.data);
            window.scrollTo(0, 0);
        })
        .catch(e => console.log(e));

}
