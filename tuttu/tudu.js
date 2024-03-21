const inputBox = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to create a new task
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
    `;
    return li;
}

// Function to add a task to the list
function addTask() {
    const taskText = inputBox.value.trim();
    if (taskText === '') {
        alert('You must enter a task.');
        return;
    }
    
    const taskElement = createTaskElement(taskText);
    
    taskList.appendChild(taskElement);
    inputBox.value = '';

    // Add event listeners for edit and delete buttons
    const editButton = taskElement.querySelector('.edit-button');
    const deleteButton = taskElement.querySelector('.delete-button');

    editButton.addEventListener('click', () => {
        const newTaskText = prompt('Edit the task:', taskText);
        if (newTaskText !== null) {
            taskElement.querySelector('span').textContent = newTaskText;
        }
    });

    deleteButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this task?')) {
            taskElement.remove();
        }
    });
}

// Event listener for adding a task
addTaskBtn.addEventListener('click', addTask);

// Event listener for pressing Enter key
inputBox.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
