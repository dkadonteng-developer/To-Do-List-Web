// script.js
const taskInput = document.getElementById("task");
const taskTimeInput = document.getElementById("task-time");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const darkModeToggle = document.getElementById("dark-mode-toggle");

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

darkModeToggle.addEventListener("change", toggleDarkMode);

function addTask() {
    const taskText = taskInput.value;
    const taskTime = taskTimeInput.value;
    
    if (taskText.trim() !== "") {
        const taskItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const spanTask = document.createElement("span");
        spanTask.textContent = taskText;
        const spanTime = document.createElement("span");
        spanTime.textContent = taskTime;
        taskItem.appendChild(checkbox);
        taskItem.appendChild(spanTask);
        taskItem.appendChild(spanTime);
        taskList.appendChild(taskItem);

        taskInput.value = "";
        taskTimeInput.value = "";

        checkbox.addEventListener("change", function () {
            if (this.checked) {
                spanTask.style.textDecoration = "line-through";
            } else {
                spanTask.style.textDecoration = "none";
            }
        });
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}
