const getElement = (selection) => {

    const element = document.querySelector(selection);

    if (element) {

        return element;

    } else {

        throw new Error(`Please check '${selection}', such element does not exist.`);

    }

};

export default getElement;