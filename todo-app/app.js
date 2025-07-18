const inputForm = document.querySelector('#input-form');
const todoListContainer = document.querySelector('#todo-list')

// function hi() {
//     console.log('hiii');
// }

// inputForm.onclick = () => hi();
console.log(JSON.parse(localStorage.getItem('todos')));

const todosLocalStorage = JSON.parse(localStorage.getItem('todos'));

const todos = [...todosLocalStorage];

const renderList = () => {
    // reset the list
    todoListContainer.innerHTML = '';

    // re-render the list
    todos.forEach(todo => {
        const div = document.createElement('div');
        div.className = 'todo-container';

        const li = document.createElement('li');
        li.textContent = todo;

        const btn = document.createElement('button');
        btn.textContent = 'Delete';

        div.append(li, btn);

        todoListContainer.append(div);
    });
}

// initial load
renderList();

inputForm.addEventListener('submit', (event) => {
    // 1. grab the value in the input
    event.preventDefault(); // prevent the page from reloading
    // console.log(event.target[0].value);

    const value = event.target[0].value;
    console.log(value);

    // 2. add to the array
    todos.push(value);

    localStorage.setItem('todos', JSON.stringify(todos));

    // 3. create new li element, append to the screen
    // const li = document.createElement('li');
    // li.textContent = value;
    // todoListContainer.append(li);

    renderList();

    event.target[0].value = '';

});