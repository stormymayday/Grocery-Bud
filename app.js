// ********** Selecting Items **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// ********** Edit Option Variables **********
let editElement;
let editFlag = false;
let editID = '';

// ********** Event Listeners **********
// Form Submission
form.addEventListener('submit', addItem);
// Clear Items
clearBtn.addEventListener('click', clearItems);

// ********** Functions **********
// Add Item - start
function addItem(event) {
    // Preventing default submit form behaviour
    event.preventDefault();

    // Accessing the groceryInput value
    const inputValue = groceryInput.value;

    // Creating a unique ID
    const id = new Date().getTime().toString();

    if (inputValue && !editFlag) {

        // If the input field is not empty
        // AND there is no editing
        // THEN add item to the list

        // Creating an article
        const element = document.createElement('article');

        // Adding the 'grocery-item' class
        element.classList.add('grocery-item');

        // Adding the ID
        const attribute = document.createAttribute('data-id');
        attribute.value = id;
        element.setAttributeNode(attribute);

        // Setting up the innerHTML
        element.innerHTML = `                    <span class="title">${inputValue}</span>

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

        // Displaying the 'success' alert
        displayAlert('item added to the list', 'success');

        // Showing the groceryContainer
        groceryContainer.classList.add('show-container');

        // Adding to local storage
        addToLocalStorage(id, inputValue);

        // Setting back to default
        setBackToDefault();

    } else if (inputValue && editFlag) {

        // If the input field is not empty
        // AND editing
        // THEN edit:

        // 1. Grabbing the input value and assigning it to the editElement:
        editElement.innerHTML = inputValue;

        // 2. Displaying the alert:
        displayAlert('value changed', 'success');

        // 3. Editing in the Local Storage
        editLocalStorage(editID, inputValue);

        // 4. Setting back to default:
        setBackToDefault();

    } else {

        // The input field is empty
        displayAlert(`please enter value`, `danger`);

    }
}
// Add Item - end

// Display Alert - start
function displayAlert(text, action) {

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
function setBackToDefault() {

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
// Clear Items - end

// Delete Item - start
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
function addToLocalStorage(id, value) {

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
function removeFromLocalStorage(id) {

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
function editLocalStorage(id, value) {

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