import { adminCard } from "./adminCard.js";
import { adminForm } from "./adminForm.js";
import { failAlert, succesAlert } from "./alerts.js";
import * as request from "./apiRequests.js";

const admForm = new adminForm("admin_form")
const prodCardsCont = document.getElementById("products")
updateProducts()


admForm.submmitBtn.addEventListener("click", () => {
    admForm.getFormData;

    if (!admForm.validateForm()) { return }

    if (admForm.data.id != "-") {

        const requestUpdate = request.updateDataInDB(admForm.data)

        requestUpdate
            .then(($response) => {
                succesAlert($response.data)
                updateProducts()

            })
            .catch(e => failAlert(3))

    } else {
        const requestInsert = request.insertDataInDB(admForm.data)

        requestInsert
            .then(($response) => {
                succesAlert($response.data)
                updateProducts()

            })
            .catch(e => failAlert(e))
    }


})


function populateProductsCards(productsList) {
    prodCardsCont.innerHTML = ""
    productsList.forEach(productData => {
        let card = new adminCard(productData, prodCardsCont)

        card.editBtn.addEventListener("click", () =>

            admForm.setDataInForm(productData))

        card.deleteBtn.addEventListener("click", () => {

            const requestDelete = request.deleteProduct(productData.prod_id)
            requestDelete
                .then(($response) => {
                    console.log($response)
                    succesAlert($response.data)
                    updateProducts()

                }).catch(e => failAlert(e))
        })
    });
}


function updateProducts() {
    let productsPromise = request.getAllProducts();
    productsPromise
        .then((response) => {
            console.log(response)
            populateProductsCards(response.data);
            window.scrollTo(0, 0)
        })
        .catch(e => console.log(e))

}
