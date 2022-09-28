import { updateProductsSection } from "./productsCards.js";
// updateProductsSection();

let checkboxes = document.querySelectorAll(".checkbox");



checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", setWhenClickedCheckbox)
})

function setWhenClickedCheckbox(e) {
    e.preventDefault();
    let checkbox = e.target;
    resetActiveStatusInCheckboxes(checkboxes);
    setActiveStatusInCheckbox(checkbox);
    updateProductsSection();
}


function resetActiveStatusInCheckboxes(checkboxes) {
    checkboxes.forEach(checkbox => {
        try { checkbox.classList.remove("active") }
        catch { }
    });
}


function setActiveStatusInCheckbox(checkbox){
    checkbox.classList.add("active")
}
