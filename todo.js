document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        saveTask(taskInput.value);
        taskInput.value = '';
    }
}

function deleteTask(button) {
    const taskText = button.previousElementSibling.textContent;
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    button.parentNode.remove();
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
    });
}
