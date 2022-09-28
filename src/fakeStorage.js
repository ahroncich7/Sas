let products = {

    tazas: {
        size: {
            img: "public/images/tazas.png",
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
                img: "/",
                title: "titulo1",
                price: "",
            },

            {
                img: "/",
                title: "titulo2",
                price: "",
            },
            {
                img: "/",
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