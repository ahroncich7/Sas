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
    
    if ( admForm.data.id != "-") {

        const requestUpdate = request.updateDataInDB(admForm.data)

        requestUpdate.then(($response) => {
            console.log($response);
            if ($response.status == "OK") {
                succesAlert($response.data)
                updateProducts()
            } else {
                failAlert($response.data)
            }
        })
            .catch(e => console.log(e))

    } else {
        const requestInsert = request.insertDataInDB(admForm.data)

        requestInsert.then(($response) => {
            console.log($response);
            if ($response.status == "OK") {
                succesAlert($response.data)
                updateProducts()
            } else {
                failAlert($response.data)
            }
        })
            .catch(e => console.log(e))
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
            requestDelete.then(($response) => {
                if ($response.status == "OK") {
                    console.log($response)
                    succesAlert($response.data)
                    updateProducts()
                } else {
                    failAlert($response.data)
                    console.log($response)
                }
            }).catch(e => console.log(e))
        })
    });
}


function updateProducts() {
    let productsPromise = request.getAllProducts()
    productsPromise.then((response) => {
        if (response.status == "OK") {
            populateProductsCards(response.data);
            window.scrollTo(0, 0)
        } else {
            console.log("status: ", response)
        }
    }).catch(e => console.log(e))

}
