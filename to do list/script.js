function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("task-list");
    const newTaskItem = document.createElement("li");
    newTaskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(newTaskItem);

    taskInput.value = "";
}

function removeTask(button) {
    const taskList = document.getElementById("task-list");
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
