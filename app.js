// Selecting Items
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const groceryInput = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const groceryContainer = document.querySelector('.grocery-container');
const groceryList = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// Edit Option Variables
let editElement;
let editFlag = false;
let editID = '';

// Event Listeners
form.addEventListener('submit', addItem);

// Functions
function addItem(event) {
    // Preventing default submit form behaviour
    event.preventDefault();

    // Accessing the groceryInput value
    const inputValue = groceryInput.value;

    // Creating a unique ID
    const id = new Date().getTime().toString();

    if (inputValue !== '' && editFlag === false) {

        // If the input field is not empty
        // AND there is no editing
        // THEN item to the list
        console.log(`add item to the list`);

    } else if (inputValue !== '' && editFlag === true) {

        // If the input field is not empty
        // AND editing
        console.log(`editing`);


    } else {

        // If the input field is empty
        console.log(`empty value`);

    }
}