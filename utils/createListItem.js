import deleteItem from "./deleteItem.js";

export default function createListItem(id, value) {

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
    selections.groceryList.appendChild(element);

}