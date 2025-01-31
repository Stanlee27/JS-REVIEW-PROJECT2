// === Todo CRUD Management ===

//Array to store todos
let todos = [];

//DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todolist = document.getElementById('todo-list');

function renderTodos() {
    todolist.innerHTML = '';
    todos.forEach((todo, index)=> {
        const li =document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Edit</button>
        `;
        todolist.appendChild(li);
    })
}

//Function to add a new todo
function addTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.ariaValueMax.trim();
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }
}

//Function to edit a todo
function editTodo(index) {
    const updatedTodo = promt('Edit your todo:', todos[index]);
    if (updatedTodo !== null) {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

//Function to delete a todo
function deleteTodo(index) {
    if (confirm('Are you sure you want tyo delete this todo?')) {
        todos.splice(index, 1);
        renderTodos();
    }
}

//Event Listeners
todoForm.addEventListener('submit', addTodo);

//Initial render
renderTodos();