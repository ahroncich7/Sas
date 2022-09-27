let checkboxes = document.querySelectorAll(".checkbox");



checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", setWhenClickedCheckbox)
})

function setWhenClickedCheckbox(e) {
    e.preventDefault();
    let checkbox = e.target;
    resetActiveClassToCheckboxes(checkboxes);
    setActiveToCheckbox(checkbox);
    launchFilter();
}


function resetActiveClassToCheckboxes(checkboxes) {
    checkboxes.forEach(checkbox => {
        try { checkbox.classList.remove("active") }
        catch { }
    });
}


function setActiveToCheckbox(checkbox){
    checkbox.classList.add("active")
}

function launchFilter() {
    
}