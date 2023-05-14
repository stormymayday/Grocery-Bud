export default function getLocalStorage() {
    // IF 'list' exists THEN get it
    // ELSE return an empty array
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}