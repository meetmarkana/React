let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        todos.push({ id: Date.now(), text: todoText });
        displayTodos();
        todoInput.value = '';
    }
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    displayTodos();
}

function editTodo(id) {
    const updatedText = prompt('Enter the updated todo:');
    if (updatedText !== null) {
        todos = todos.map(todo => (todo.id === id ? { ...todo, text: updatedText } : todo));
        displayTodos();
    }
}

function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="edit btn" onclick="editTodo(${todo.id})">Edit</button>&nbsp;&nbsp;&nbsp;
            <button class="delete btn" onclick="deleteTodo(${todo.id})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

window.onload = displayTodos;
