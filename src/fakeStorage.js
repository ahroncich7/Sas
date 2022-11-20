let products = {

    tazas: {
        size: {
            img: "public/images/tazas.jpg",
            small: {
                title: "200 ml",
                price: "$2000",
            },

            medium: {
                title: "350 ml",
                price: "$3200",
            }, 

            large: {
                title: "500 ml",
                price: "$4000",
            }
        },

        products: [
            {
                img: "../public/images/taza-editada.png",
                title: "titulo1",
                price: "",
            },

            {
                img: "../public/images/taza-editada.png",
                title: "titulo2",
                price: "",
            },
            {
                img: "../public/images/taza-editada.png",
                title: "titulo3",
                price: "",
            }
        ]
    }


};


function getProductsFromApi(type) {
    return products[`${type}`]
}

export {getProductsFromApi, products}