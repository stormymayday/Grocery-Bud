import { selections, editInfo } from "../app.js";

export function setBackToDefault() {

    // Clearing input value
    selections.groceryInput.value = '';

    // Setting editFlag to false
    editInfo.editFlag = false;

    // Setting editID to empty string
    editInfo.editID = '';

    // Setting submit button value to 'submit'
    selections.submitBtn.textContent = 'submit';
}

export default setBackToDefault;