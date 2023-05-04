import { selections, editInfo } from "../app.js";

function editItem(event) {

    // Selecting the 'grocery-item'
    const groceryItem = event.currentTarget.parentElement.parentElement;

    // Getting the associated span with class of 'title' that contains the item name
    // editElement = event.currentTarget.parentElement.previousElementSibling;
    editInfo.editElement = event.currentTarget.parentElement.previousElementSibling;

    // Placing the groceryItem name into the input field (groceryInput)
    // groceryInput.value = editElement.innerHTML;
    // groceryInput.value = editInfo.editElement.innerHTML;
    selections.groceryInput.value = editInfo.editElement.innerHTML;

    // Setting the editFlag to true
    // editFlag = true;
    editInfo.editFlag = true;

    // Setting up the editID
    // editID = groceryItem.dataset.id;
    editInfo.editID = groceryItem.dataset.id;

    // Changing the 'Submit' button (value) to 'Edit'
    // submitBtn.textContent = 'edit';
    selections.submitBtn.textContent = 'edit';
}

export default editItem;