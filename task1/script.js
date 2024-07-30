document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodoItem(todoInput.value);
        todoInput.value = '';
    });

    function addTodoItem(task) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">X</button>
        `;
        li.querySelector('.delete-btn').addEventListener('click', () => {
            todoList.removeChild(li);
        });
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        todoList.appendChild(li);
    }
});
