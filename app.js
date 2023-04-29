import getElement from "./utils/getElement.js";
import addItem from "./utils/addItem.js";
import deleteItem from "./utils/deleteItem.js";
import clearItems from "./utils/clearItems.js";

// ********** Selecting Items **********
const alert = getElement('.alert');
const form = getElement('.grocery-form');
export const groceryInput = document.getElementById('grocery');
const submitBtn = getElement('.submit-btn');
export const groceryContainer = getElement('.grocery-container');
export const groceryList = getElement('.grocery-list');
const clearBtn = getElement('.clear-btn');

// ********** Edit Option Variables **********
export let editElement;
export let editFlag = false;
export let editID = '';

// ********** Event Listeners **********
// Form Submission
form.addEventListener('submit', addItem);
// Clear Items
clearBtn.addEventListener('click', clearItems);
// Load Items from Local Storage
window.addEventListener('DOMContentLoaded', setUpItems);

// ********** Functions **********
// Add Item - start

// Add Item - end

// Display Alert - start
export function displayAlert(text, action) {

    // Displaying alert text
    alert.textContent = text;

    // Adding the alert class (danger/success)
    alert.classList.add(`alert-${action}`);

    // Removing the alert after 1.5 second (1500 ms)
    setTimeout(function () {

        // Removing the alert text
        alert.textContent = '';

        // Removing the alert class (danger/success)
        alert.classList.remove(`alert-${action}`);

    }, 1500);

}
// Display Alert - end

// Set Back to Default - start
export function setBackToDefault() {

    // Clearing input value
    groceryInput.value = '';

    // Setting editFlag to false
    editFlag = false;

    // Setting editID to empty string
    editID = '';

    // Setting submit button value to 'submit'
    submitBtn.textContent = 'submit';
}
// Set Back to Default - end

// Clear Items - start

// Clear Items - end

// Delete Item - start

// Delete Item - end

// Edit Item - start
function editItem(event) {

    // Selecting the 'grocery-item'
    const groceryItem = event.currentTarget.parentElement.parentElement;

    // Getting the associated span with class of 'title' that contains the item name
    editElement = event.currentTarget.parentElement.previousElementSibling;

    // Placing the groceryItem name into the input field (groceryInput)
    groceryInput.value = editElement.innerHTML;

    // Setting the editFlag to true
    editFlag = true;

    // Setting up the editID
    editID = groceryItem.dataset.id;

    // Changing the 'Submit' button (value) to 'Edit'
    submitBtn.textContent = 'edit';
}
// Edit Item - end

// ********** Local Storage **********

// localStorage API
// Key Value pairs
// Methods:
// 1. setItem
// 2. getItem
// 3. removeItem
// Need to save values as strings
// Examples:
// localStorage.setItem('myKey1', JSON.stringify(['item1', 'item2']));
// const myArray = JSON.parse(localStorage.getItem('myKey1'));
// localStorage.removeItem('list');

// Add to local storage - start
export function addToLocalStorage(id, value) {

    // Setting up the grocery object
    const grocery = { id: id, value: value };

    // Getting items from the Local Storage
    let items = getLocalStorage();

    // Adding 'grocery' into the 'items' array
    items.push(grocery);

    // Putting 'items' into the Local Storage (overriding an existing value)
    localStorage.setItem('list', JSON.stringify(items));

}
// Add to local storage - end

// Remove from local storage - start
export function removeFromLocalStorage(id) {

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
// Remove from local storage - end

// Edit in local storage - start
export function editLocalStorage(id, value) {

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
// Edit in local storage - end

// Get local storage - start
function getLocalStorage() {
    // IF 'list' exists THEN get it
    // ELSE return an empty array
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}
// Get local storage - end

// ****** Set Up Items **********
// setUpItems - start
function setUpItems() {

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
        groceryContainer.classList.add('show-container');

    }

}
// setUpItems - end

// createListItem - start
export function createListItem(id, value) {

    // Creating an article
    const element = document.createElement('article');

    // Adding the 'grocery-item' class
    element.classList.add('grocery-item');

    // Adding the ID
    const attribute = document.createAttribute('data-id');
    attribute.value = id;
    element.setAttributeNode(attribute);

    // Setting up the innerHTML
    element.innerHTML = `                    <span class="title">${value}</span>

                    <!-- btn-container start -->
                    <div class="btn-container">

                        <!-- edit btn start -->
                        <button type="button" class="edit-btn">
                            <i class="fas fa-edit"></i>
                        </button>
                        <!-- edit btn end -->

                        <!-- delete btn start -->
                        <button type="button" class="delete-btn">
                            <i class="fas fa-trash"></i>
                        </button>
                        <!-- delete btn end -->

                    </div>
                    <!-- btn-container end -->
        `;

    // Targetting the delete item button
    const deleteBtn = element.querySelector('.delete-btn');

    // Targetting the edit item button
    const editBtn = element.querySelector('.edit-btn');

    // delete item button event listener
    deleteBtn.addEventListener('click', deleteItem);

    // edit item button event listener
    editBtn.addEventListener('click', editItem);

    // Adding article to the list
    groceryList.appendChild(element);

}
// createListItem - end