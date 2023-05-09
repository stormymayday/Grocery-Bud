import { selections, editInfo } from "../app.js";
import { createListItem } from "../app.js";
import displayAlert from "./displayAlert.js";
import { addToLocalStorage } from "../app.js";
import { editLocalStorage } from "../app.js";
import setBackToDefault from "../utils/setBackToDefault.js";

function addItem(event) {
    // Preventing default submit form behaviour
    event.preventDefault();

    // Accessing the groceryInput value
    const inputValue = selections.groceryInput.value;

    // Creating a unique ID
    const id = new Date().getTime().toString();

    if (inputValue && !editInfo.editFlag) {

        // If the input field is not empty
        // AND there is no editing
        // THEN add item to the list

        // Calling the creatListItem
        createListItem(id, inputValue);

        // Displaying the 'success' alert
        displayAlert('item added to the list', 'success');

        // Showing the groceryContainer
        selections.groceryContainer.classList.add('show-container');

        // Adding to local storage
        addToLocalStorage(id, inputValue);

        // Setting back to default
        setBackToDefault();

    } else if (inputValue && editInfo.editFlag) {

        // If the input field is not empty
        // AND editing
        // THEN edit:

        // 1. Grabbing the input value and assigning it to the editElement:
        editInfo.editElement.innerHTML = inputValue;

        // 2. Displaying the alert:
        displayAlert('value changed', 'success');

        // 3. Editing in the Local Storage
        editLocalStorage(editInfo.editID, inputValue);

        // 4. Setting back to default:
        setBackToDefault();

    } else {

        // The input field is empty
        displayAlert(`please enter value`, `danger`);

    }
}

export default addItem;