import getLocalStorage from "./localStorage/getLocalStorage.js";

export default function setUpItems() {

    // Getting items from the Local Storage
    let items = getLocalStorage();

    // Checking if the 'items' array is not empty
    if (items.length > 0) {

        // Iterating over the items
        items.forEach(function (item) {

            // Calling the createListItem
            createListItem(item.id, item.value);

        });

        // Adding the 'show-container' class
        selections.groceryContainer.classList.add('show-container');

    }

}