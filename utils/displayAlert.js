function displayAlert(text, action) {

    // Displaying alert text
    selections.alert.textContent = text;

    // Adding the alert class (danger/success)
    selections.alert.classList.add(`alert-${action}`);

    // Removing the alert after 1.5 second (1500 ms)
    setTimeout(function () {

        // Removing the alert text
        selections.alert.textContent = '';

        // Removing the alert class (danger/success)
        selections.alert.classList.remove(`alert-${action}`);

    }, 1500);

}

export default displayAlert;