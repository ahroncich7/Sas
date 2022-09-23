let checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", setClickedCheckbox)
})

function setClickedCheckbox(e) {
    e.preventDefault();
    let checkbox = e.target;
    let parentElement = checkbox.parentElement;
    let input = parentElement.querySelector("input");
    input.checked ^= true;
    if(input.checked){
        checkbox.classList.add("active")
    }else{
        checkbox.classList.remove("active")
    }
}
