const inputForm = document.querySelector('#input-form');
const todoListContainer = document.querySelector('#todo-list')

// function hi() {
//     console.log('hiii');
// }

// inputForm.onclick = () => hi();
console.log(JSON.parse(localStorage.getItem('todos')));

const todosLocalStorage = JSON.parse(localStorage.getItem('todos'));

const todos = [...todosLocalStorage];



const onDeleteHandler = (todo) => {
    console.log(todo);   
}

const onCancelHandler = (div) => {
    // return;
    const todo = div.querySelector('.input-value').value;
    console.log(todo);

    div.innerHTML = '';
    
    // const div = document.createElement('div');
    div.className = 'todo-container';
    
    // console.log(div.children);


    const li = document.createElement('li');
    li.textContent = todo;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit'
    editBtn.className = 'edit-btn';
    editBtn.setAttribute('data-todo-key', todo);

    editBtn.onclick = () => onEditHandler(div);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('data-todo-key', todo);

    deleteBtn.onclick = () => {
        onDeleteHandler(todo)
    }
    
    const btnsContainer = document.createElement('div');
    btnsContainer.append(editBtn, deleteBtn);

    div.append(li, btnsContainer);


}

const onSaveHandler = (div, prevValue, newValue, input) => {
    console.log(prevValue, newValue);
    console.log(input);
    
    // todos[todos.indexOf(prevValue)] = ;
}

const onEditHandler = div => {
    // console.log(li);

    // div.innerHTML = ''

    // const value = li.textContent;
    // li.textContent = '';
    // const input = document.createElement('input');
    // input.value = value
    // li.append(input);

    const prevValue = div.querySelector('li').textContent;

    div.innerHTML = '';
    
    const input = document.createElement('input');
    input.defaultValue = prevValue;
    input.className = 'input-value';

    const li = document.createElement('li');
    li.appendChild(input);
    div.append(li);

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save'
    saveBtn.className = 'edit-btn';
    // saveBtn.setAttribute('data-todo-key', todo);

    const newValue = input.value;
    saveBtn.onclick = () => onSaveHandler(div, prevValue, newValue, input);

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.className = 'delete-btn';
    // cancelBtn.setAttribute('data-todo-key', todo);

    cancelBtn.onclick = () => onCancelHandler(div);
    
    const btnsContainer = document.createElement('div');
    btnsContainer.append(saveBtn, cancelBtn);
    
    div.append(btnsContainer);
    
}

const renderList = () => {
    // reset the list
    todoListContainer.innerHTML = '';

    const todos = JSON.parse(localStorage.getItem('todos'));

    // re-render the list
    todos.forEach(todo => {
        const div = document.createElement('div');
        div.className = 'todo-container';

        const li = document.createElement('li');
        li.textContent = todo;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit'
        editBtn.className = 'edit-btn';
        editBtn.setAttribute('data-todo-key', todo);

        editBtn.onclick = () => onEditHandler(div);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.setAttribute('data-todo-key', todo);

        deleteBtn.onclick = () => {
            onDeleteHandler(todo)
        }
        
        const btnsContainer = document.createElement('div');
        btnsContainer.append(editBtn, deleteBtn);
    
        div.append(li, btnsContainer);

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

    // console.log('hello') -> std::cout << "hello" -> 0101010
    
});


// console.log(todos);

// let deleteButtons = document.querySelectorAll('.delete-btn');

// // console.log(deleteButtons);
// deleteButtons.forEach(btn => {
//     const todoValue = btn.getAttribute('data-todo-key')
//     btn.addEventListener('click', () => {
//         console.log('deleting...' + todoValue);
        
//         todos.splice(todos.indexOf(todoValue), 1);

//         console.log(todos);
//         localStorage.setItem('todos', JSON.stringify(todos));
        
//         renderList();

//         deleteButtons = document.querySelectorAll('.delete-btn');

//     }); 
// });

