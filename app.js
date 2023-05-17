import getElement from "./utils/getElement.js";
import editItem from "./utils/editItem.js";
import addItem from "./utils/addItem.js";
import clearItems from "./utils/clearItems.js";
import setUpItems from "./utils/setUpItems.js";

// ********** Selecting Items **********
export const selections = {
    alert: getElement('.alert'),
    form: getElement('.grocery-form'),
    submitBtn: getElement('.submit-btn'),
    groceryInput: getElement('#grocery'),
    groceryContainer: getElement('.grocery-container'),
    groceryList: getElement('.grocery-list'),
    clearBtn: getElement('.clear-btn'),
};

// ********** Edit Option Variables **********
export const editInfo = {
    editElement: null,
    editFlag: false,
    editID: '',
};

// ********** Event Listeners **********
// Form Submission
selections.form.addEventListener('submit', addItem);
// Clear Items
selections.clearBtn.addEventListener('click', clearItems);
// Load Items from Local Storage
window.addEventListener('DOMContentLoaded', setUpItems);