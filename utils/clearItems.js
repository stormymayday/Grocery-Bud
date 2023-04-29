import { groceryList, groceryContainer } from "../app.js";
import { displayAlert } from "../app.js";
import { setBackToDefault } from "../app.js";

function clearItems() {

    // Selecting all the 'grocery-item's
    const items = document.querySelectorAll('.grocery-item');

    // Checking if the length of the nodeList is > 0
    if (items.length > 0) {

        // Iterating over the nodeList and removing items from the groceryList
        items.forEach(function (item) {
            groceryList.removeChild(item);
        });

    }

    // Removing 'show-container' class from the groceryContainer
    groceryContainer.classList.remove('show-container');

    // Displaying the alert
    displayAlert('list has been cleared', 'success');

    // Setting back to default
    setBackToDefault();

    // Removing from local storage
    localStorage.removeItem('list');

}

export default clearItems;