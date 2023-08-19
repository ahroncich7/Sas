export function searchHandler(event) {

    let filterData = event.target.value;
    filterData = filterData.toUpperCase();
    let productsCards = document.querySelectorAll(".product");

    productsCards.forEach(element => {
        try {
            element.classList.remove("ocult");
        } catch {
            null;
        }
        if (!element.children[1].children[0].innerText.includes(filterData)) {

            element.classList.add("ocult");
        }
    });


}
