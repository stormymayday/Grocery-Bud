import getLocalStorage from './getLocalStorage.js';

export default function addToLocalStorage(id, value) {

    // Setting up the grocery object
    const grocery = { id: id, value: value };

    // Getting items from the Local Storage
    let items = getLocalStorage();

    // Adding 'grocery' into the 'items' array
    items.push(grocery);

    // Putting 'items' into the Local Storage (overriding an existing value)
    localStorage.setItem('list', JSON.stringify(items));

}