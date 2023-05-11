import { getLocalStorage } from '../../app.js';

export default function removeFromLocalStorage(id) {

    // Getting items from the Local Storage
    let items = getLocalStorage();

    // Filtering out the item with matching ID
    items = items.filter(function (item) {

        if (item.id !== id) {
            return item;
        }

    });

    // Putting updated 'items' array (w/o the filtered out item) into the Local Storage
    localStorage.setItem('list', JSON.stringify(items));
}