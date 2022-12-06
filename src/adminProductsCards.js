import { chargeDataInForm, deleteProduct } from "./adminForm.js";



function newCard(data) {
    let card = `
            <div id="porducts" class="products">
                <div class="row p-2" style=background-color:wheat>
                    <div class="col-2  text-center" style=min-height:100px>
                        <img src="${data.img}" alt="" class="img-thumbnail" style=height: 100px>
                    </div>

                    <div class="col d-flex flex-row gap-5 justify-content-center align-items-center"
                        style=min-height:100px>
                        <p><span>Nombre: </span> ${data.titulo}</p>
                        <p><span>Precio: </span> $${data.precio}</p>
                        <p><span>Categoria: </span> ${data.nombre}</p>
                        <p><span>URL Imagen: </span> ${data.img}</p>
                        <p><span>ID: </span> ${data.prod_id}</p>
                    </div>

                    <div class="col-2 flex-column d-flex gap-1 justify-content-center" style=min-height:100px>
                        <button id = edit-${data.prod_id}  class="btn btn-success" >Editar</button>
                        <button id = delete-${data.prod_id} class="btn btn-danger" >Eliminar</button>
                    </div>
                </div>
            </div>`

    let productCont = document.getElementById("products");
    productCont.insertAdjacentHTML("beforeend", card)

    document.getElementById(`edit-${data.prod_id}`).addEventListener("click", ()=>{
        chargeDataInForm(data)
    })
    document.getElementById(`delete-${data.prod_id}`).addEventListener("click", () => {
        deleteProduct(data.prod_id)
    })
}


function populate(productsList) {
    let productCont = document.getElementById("products")
    productCont.innerHTML = ""
    productsList.forEach(product => {
        newCard(product)
    });
}

export { newCard, populate }