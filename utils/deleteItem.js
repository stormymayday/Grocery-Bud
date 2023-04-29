import { groceryList, groceryContainer } from "../app.js";
import { displayAlert } from "../app.js";
import { setBackToDefault } from "../app.js";
import { removeFromLocalStorage } from "../app.js";

function deleteItem(event) {

    // Selecting the 'grocery-item'
    const groceryItem = event.currentTarget.parentElement.parentElement;

    // Accesssing the id
    const id = groceryItem.dataset.id;

    // Removing 'grocery-item' from the groceryList
    groceryList.removeChild(groceryItem);

    // Check if groceryList is empty
    if (groceryList.children.length === 0) {
        // Remove the 'show-container' class
        groceryContainer.classList.remove('show-container');
    }

    // Displaying the alert
    displayAlert('item removed', 'success');

    // Setting back to default
    setBackToDefault();

    // Removing from Local Storage
    removeFromLocalStorage(id);

}

export default deleteItem;