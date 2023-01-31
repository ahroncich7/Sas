class adminProductCard {

    constructor(data, cardsContElement) {


        this.card = `
            <div id="products" class="products my-3">
                <div class="row p-2" style=background-color:${data.stock?"lightgreen":"lightpink"}>
                    <div class="col-2  text-center" style=min-height:100px>
                        <img src="${data.img}" alt="" class="img-thumbnail" style=height: 100px>
                    </div>

                    <div class="col d-flex flex-row gap-5 justify-content-center align-items-center"
                        style=min-height:100px>
                        <p><span>Nombre: </span> ${data.titulo}</p>
                        <p><span>Precio: </span> $${data.precio}</p>
                        <p><span>Categoria: </span> ${data.nombre_cat}</p>
                        <p><span>En Stock: </span> ${data.stock?"Si":"No"}</p>
                        <p><span>ID: </span> ${data.prod_id}</p>
                    </div>

                    <div class="col-2 flex-column d-flex gap-1 justify-content-center" style=min-height:100px>
                        <button id = edit-${data.prod_id}  class="btn btn-success" >Editar</button>
                        <button id = delete-${data.prod_id} class="btn btn-danger" >Eliminar</button>
                    </div>
                </div>
            </div>`
        
        
        cardsContElement.insertAdjacentHTML("beforeend", this.card)
        this.editBtn = cardsContElement.querySelector(`#edit-${data.prod_id}`)
        this.deleteBtn = cardsContElement.querySelector(`#delete-${data.prod_id}`)
    }

    

}

export { adminCard }