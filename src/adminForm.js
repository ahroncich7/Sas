import { failAlert, succesAlert } from "./alerts.js"
import { populate } from "./adminProductsCards.js"

let form = document.getElementById("admin_form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

document.getElementById("submit-btn").addEventListener("click", ((e) => {
    const data = new FormData(document.querySelector("form"))
    const dataObject = Object.fromEntries(data.entries())
    console.log(dataObject)

    let form_is_valid = true
    Object.values(dataObject).forEach((e) => {
        if (!e) {
            form_is_valid = false
        }
    })

    if (!form_is_valid) { return }

    if (dataObject.id == "-") {
        const results = fetch("/insertProduct", {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(dataObject)
        }).then((e) => e.json())

        results.then(($response) => {
            console.log($response);
            if ($response.status == "OK") {
                succesAlert($response.data)
                updateProducts()
            } else {
                failAlert($response.data)
            }
        })
            .catch(e => console.log(e))
    }else{
        const results = fetch("/updateProduct", {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify(dataObject)
        }).then((e) => e.json())

        results.then(($response) => {
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

}))

function chargeDataInForm(data) {
    let form = document.getElementById("admin_form")
    form.title.value = data.titulo;
    form.price.value = data.precio;
    form.img_url.value = data.img;
    form.id.value = data.prod_id || "-"
    window.scrollTo(0, 0)
}

function updateOneProduct(id) {

}

function deleteProduct(id) {
    let response = fetch("/deleteProduct", {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "DELETE",
        body: JSON.stringify({ id: id })
    }).then((e) => e.json())
        .catch(e => console.log(e))

    response.then(($response) => {
        if ($response.status == "OK") {
            console.log($response)
            succesAlert($response.data)
            updateProducts()
        } else {
            failAlert($response.data)
        }
    }).catch(e => console.log(e))
}

function updateProducts() {
    let productsPriomise = fetch("/listAll", {

    }).then((e) => e.json()).
        catch(e => console.log(e))

    productsPriomise.then((response) => {
        if (response.status == "OK") {
            populate(response.data);
        } else {
            console.log("status: ", response)
        }
    }).catch(e => console.log(e))

}

updateProducts()

export { chargeDataInForm, deleteProduct }

