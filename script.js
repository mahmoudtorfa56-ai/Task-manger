const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const tasksList = document.getElementById('tasksList');
const deleteAllBtn = document.getElementById('deleteAllBtn');

addBtn.addEventListener("click", function () {
    const taskText = taskInput.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    tasksList.appendChild(li);

    taskInput.value = "";
});