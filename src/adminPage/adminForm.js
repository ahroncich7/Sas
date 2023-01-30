class adminForm {


    constructor(id) {
        this.formElement = document.getElementById(id);
        this.submmitBtn = this.formElement.querySelector("#submit-btn")
        this.preventOnSubmit()
        this.data = {}
    }

    setDataInForm(data) {
        this.formElement.category.value = data.nombre_cat
        this.formElement.stock.checked = Boolean(data.stock)
        this.formElement.title.value = data.titulo;
        this.formElement.price.value = data.precio;
        this.formElement.img_url.value = data.img;
        this.formElement.id.value = Number(data.prod_id) || "-";
        window.scrollTo(0, 0)
    }

    preventOnSubmit() {
        this.formElement.addEventListener("submit", (event) => {
            event.preventDefault()
        })
    }

    getFormData() {
        const $data = new FormData(document.querySelector("form"))
        this.data = Object.fromEntries($data.entries())
    }

    validateForm() {
        this.getFormData();

        let form_is_valid = true
        Object.values(this.data).forEach((e) => {
            if (!e) {
                form_is_valid = false
            }
        })

        return form_is_valid
    }
}



export { adminForm }