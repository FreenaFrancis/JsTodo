// Get required elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listener for add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', toggleTask);

    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Function to toggle task completion
function toggleTask() {
  this.classList.toggle('completed');
}
