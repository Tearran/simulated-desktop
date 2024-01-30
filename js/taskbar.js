document.addEventListener('DOMContentLoaded', function() {
// Get the taskbar element
var taskbar = document.getElementById('taskbar');

// Function to add a task to the taskbar
function addTask(task) {
    var taskElement = document.createElement('div');
    taskElement.className = 'task';
    taskElement.textContent = task.name;
    taskbar.appendChild(taskElement);
}

// Function to remove a task from the taskbar
function removeTask(task) {
    var taskElements = Array.from(taskbar.getElementsByClassName('task'));
    var taskElement = taskElements.find(function(element) {
        return element.textContent === task.name;
    });
    if (taskElement) {
        taskbar.removeChild(taskElement);
    }
}

});