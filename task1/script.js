document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoDate = document.getElementById('todo-date');
    const todoInput = document.getElementById('todo-input');
    const todoTime = document.getElementById('todo-time');
    const todoListContainer = document.getElementById('todo-list-container');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodoItem(todoDate.value, todoInput.value, todoTime.value);
        todoInput.value = '';
        todoTime.value = '';
    });

    function addTodoItem(date, task, time) {
        let dateContainer = document.querySelector(`[data-date='${date}']`);

        if (!dateContainer) {
            dateContainer = document.createElement('div');
            dateContainer.className = 'date-container';
            dateContainer.setAttribute('data-date', date);
            dateContainer.innerHTML = `
                <h2>${date}</h2>
                <ul class="todo-list"></ul>
            `;
            todoListContainer.appendChild(dateContainer);
        }

        const todoList = dateContainer.querySelector('.todo-list');
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${task} - ${time}</span>
            <button class="completed-btn">Completed</button>
            <button class="delete-btn">X</button>
        `;

        li.querySelector('.completed-btn').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            todoList.removeChild(li);
            if (todoList.children.length === 0) {
                dateContainer.remove();
            }
        });

        todoList.appendChild(li);
    }
});
