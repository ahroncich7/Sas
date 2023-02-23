export class checkBoxesController {

    constructor(cllBckWhenClicked) {
        this.checkBoxes = document.querySelectorAll(".checkbox");
        this.checkBoxesConfig();
        this.cllBckWhenClicked = cllBckWhenClicked;
    }

    checkBoxesConfig = () => {
        this.checkBoxes.forEach((checkbox) => {
            checkbox.addEventListener("click", this.setWhenClickedCheckbox);
        });
    };
    
    
    setWhenClickedCheckbox = (e) => {
        e.preventDefault();
        this.resetActiveStatusInCheckboxes();

        let checkbox = e.target;
        this.setActiveStatusInCheckbox(checkbox);
        
        let type = checkbox.querySelector("input").value;
        this.cllBckWhenClicked(type);
    };
    
    
    resetActiveStatusInCheckboxes = () => {
        this.checkBoxes.forEach(checkbox => {
            try { checkbox.classList.remove("active"); }
            catch {true;}
        });
    };
    
    setActiveStatusInCheckbox = (checkbox) => {
        checkbox.classList.add("active");
    };
}