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

    // Accesing the groceryInput value
    const inputValue = groceryInput.value;
}