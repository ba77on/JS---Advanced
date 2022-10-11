function addItem() {
    let listOfItems = document.getElementById("items");
    let resultInput = document.getElementById("newItemText").value;
    let liElement = document.createElement('li');
    liElement.textContent = resultInput;

    listOfItems.appendChild(liElement);
    document.getElementById("newItemText").value = '';
}