function failAlert(message) {
    let alertElement = document.getElementById("fail-alert")
    alertElement.innerHTML = message
    alertElement.classList.toggle("d-none")
    setTimeout(() => {
        alertElement.classList.toggle("d-none")
    }, 3000)
};

function succesAlert(message) {
    let alertElement = document.getElementById("succes-alert")
    alertElement.innerHTML = message
    alertElement.classList.toggle("d-none")
    setTimeout(() => {
        alertElement.classList.toggle("d-none")
    }, 3000)
};


export { failAlert, succesAlert }; 