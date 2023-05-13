export default function editLocalStorage(id, value) {

    // Getting items from the Local Storage
    let items = getLocalStorage();


    items = items.map(function (item) {

        // IF the item ID matches the ID THEN change the value and return
        // ELSE simply return the item
        if (item.id === id) {
            item.value = value;
            return item;
        } else {
            return item;
        }

    });

    // Putting updated 'items' array into the Local Storage
    localStorage.setItem('list', JSON.stringify(items));

}