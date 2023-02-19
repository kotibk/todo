let mainButton = document.querySelector('.menuButton'),
logo = document.querySelector('.logo'),
todoCreator = document.querySelector('.create_new_todo'),
addMessage = document.querySelector('.message'),
addButton = document.querySelector('.add'),
todo = document.querySelector('.todo');



mainButton.addEventListener('click', () => {
    mainButton.classList.add('onClick');
    
logo.classList.add('show');
todoCreator.classList.remove('hidden');
});

let todoList = [];

addButton.addEventListener('click', function (){
    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newTodo);
    displayMessages();
});

function displayMessages() {
    
    let displayMessage = '';
    
    todoList.forEach(function (item, i) {
        displayMessage += `
        <li>
        <input type ='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
        <label for='item_${i}' class="${item.important ? 'important' : ''}">${item.todo}</label>
        </li>
            `;
        todo.innerHTML = displayMessage;
    });
}
todo.addEventListener('change', function (event) {
    let idInput = event.target.getAttribute('id');
    let forLabel = todo.querySelector('[for=' + idInput + ']');
    let valueLabel = forLabel.innerHTML;
todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
        item.checked = !item.checked;
    }
});
});