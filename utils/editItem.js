import { selections, editInfo } from "../app.js";

function editItem(event) {

    // Selecting the 'grocery-item'
    const groceryItem = event.currentTarget.parentElement.parentElement;

    // Getting the associated span with class of 'title' that contains the item name
    editInfo.editElement = event.currentTarget.parentElement.previousElementSibling;

    // Placing the groceryItem name into the input field (groceryInput)
    selections.groceryInput.value = editInfo.editElement.innerHTML;

    // Setting the editFlag to true
    editInfo.editFlag = true;

    // Setting up the editID
    editInfo.editID = groceryItem.dataset.id;

    // Changing the 'Submit' button (value) to 'Edit'
    selections.submitBtn.textContent = 'edit';
}

export default editItem;