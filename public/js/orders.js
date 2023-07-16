import {getCategories} from "../services/apiRequest.js";


let categories = [];
let orderListEl = document.getElementById("order-list");

getCategories().then((res)=>{
    categories = res.data;
    orderListEl.innerHTML = "";
    let count = 0;
    categories.forEach(category => {
        orderListEl.innerHTML += 

        `
        <div class="carousel-item w-100 ${count === 0 ? "active": " "}">
            <h2 class="text-center">${category.nombre_cat}</h2>
            <div class="carousel-block">
                <div class="custom-card d-inl container-fluid text-center" style="width: 250px;">
                    <img class="img-fluid size-small" src="${category.size_img}" alt="${category.nombre_cat}">
                    <h5 class="mt-2">${category.small_cap} ${category.U_M} </h5>
                    <h5>$ ${category.small_price}</h5>
                </div>
                <div class="custom-card d-inl container-fluid text-center" style="width: 250px;">
                    <img class="img-fluid size-medium" src="${category.size_img}" alt="${category.nombre_cat}">
                    <h5 class="mt-2">${category.medium_cap} ${category.U_M} </h5>
                    <h5>$ ${category.medium_price}</h5>
                </div>
                <div class="custom-card d-inl container-fluid text-center" style="width: 250px;">
                    <img class="img-fluid size-large" src="${category.size_img}" alt="${category.nombre_cat}">
                    <h5 class="mt-2">${category.large_cap} ${category.U_M} </h5>
                    <h5>$ ${category.large_price}</h5>
                </div>
            </div>
        </div>`;

        count++;
    });

}).catch(e=>console.log(e));


// //Carga datos de las medidas (sizes)
// const sizes = [];
// const sizesContainer = document.getElementById("carouselExample");

// //Limpia el contenedor del carrousel
// sizesContainer.innerHTML = "";

// //Itera las categorías e inyecta los fragmentos de HTML.
// sizes.forEach((cat)=>{
//     sizesContainer.innerHTML += `
        
//     `
// });

