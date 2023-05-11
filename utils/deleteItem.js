import { selections } from "../app.js";
import displayAlert from "./displayAlert.js";
import setBackToDefault from "./setBackToDefault.js";
import removeFromLocalStorage from "./localStorage/removeFromLocalStorage.js";

function deleteItem(event) {

    // Selecting the 'grocery-item'
    const groceryItem = event.currentTarget.parentElement.parentElement;

    // Accesssing the id
    const id = groceryItem.dataset.id;

    // Removing 'grocery-item' from the groceryList
    selections.groceryList.removeChild(groceryItem);

    // Check if groceryList is empty
    if (selections.groceryList.children.length === 0) {
        // Remove the 'show-container' class
        selections.groceryContainer.classList.remove('show-container');
    }

    // Displaying the alert
    displayAlert('item removed', 'success');

    // Setting back to default
    setBackToDefault();

    // Removing from Local Storage
    removeFromLocalStorage(id);

}

export default deleteItem;