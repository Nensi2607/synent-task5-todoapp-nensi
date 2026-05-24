const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

/* Load Tasks When Page Opens */

window.addEventListener("DOMContentLoaded", loadTasks);

/* Add Task Function */

function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    createTaskElement(taskText, false);

    saveTasks();

    taskInput.value = "";
}

/* Create Task Element */

function createTaskElement(taskText, completed){

    const li = document.createElement("li");

    li.classList.add("task-item");

    if(completed){
        li.classList.add("completed");
    }

    li.innerHTML = `
        <div class="task-content">

            <input type="checkbox" class="check-task" ${completed ? "checked" : ""}>

            <span>${taskText}</span>

        </div>

        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);

    /* Delete Task */

    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function(){

        li.remove();

        saveTasks();

    });

    /* Complete Task */

    const checkTask = li.querySelector(".check-task");

    checkTask.addEventListener("change", function(){

        li.classList.toggle("completed");

        saveTasks();

    });

}

/* Save Tasks */

function saveTasks(){

    const tasks = [];

    const allTasks = document.querySelectorAll(".task-item");

    allTasks.forEach(function(task){

        const text = task.querySelector("span").innerText;

        const completed = task.classList.contains("completed");

        tasks.push({
            text,
            completed
        });

    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

/* Load Tasks */

function loadTasks(){

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    storedTasks.forEach(function(task){

        createTaskElement(task.text, task.completed);

    });

}

/* Add Button */

addBtn.addEventListener("click", addTask);

/* Enter Key Support */

taskInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});