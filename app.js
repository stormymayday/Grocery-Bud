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
form.addEventListener('submit', addItem);

// ********** Functions **********
// Add Item
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
        `
        // Adding article to the list
        groceryList.appendChild(element);

        // Displaying the 'success' alert
        displayAlert('item added to the list', 'success');

    } else if (inputValue && editFlag) {

        // If the input field is not empty
        // AND editing
        // THEN edit
        console.log(`editing`);


    } else {

        // The input field is empty
        displayAlert(`please enter value`, `danger`);

    }
}

// Display Alert
function displayAlert(text, action) {

    // Displaying alert text
    alert.textContent = text;

    // Adding the alert class (danger/success)
    alert.classList.add(`alert-${action}`);

    // Removing the alert after 1 second (1000 ms)
    setTimeout(function () {

        // Removing the alert text
        alert.textContent = '';

        // Removing the alert class (danger/success)
        alert.classList.remove(`alert-${action}`);

    }, 1000);

}
