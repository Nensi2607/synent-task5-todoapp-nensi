const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

/* Add Task Function */

function addTask(){

    const taskText = taskInput.value.trim();

    /* Input Validation */

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    /* Create Task Item */

    const li = document.createElement("li");

    li.classList.add("task-item");

    li.innerHTML = `
    <div class="task-content">

        <input type="checkbox" class="check-task">

        <span>${taskText}</span>

    </div>

    <button class="delete-btn">Delete</button>
`;
    /* Add Task to List */

    taskList.appendChild(li);

    /* Clear Input */

    taskInput.value = "";

    /* Delete Task */

    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function(){

        li.remove();

    });

    /* Complete Task */

const checkTask = li.querySelector(".check-task");

checkTask.addEventListener("change", function(){

    li.classList.toggle("completed");

});

}

/* Add Button Click */

addBtn.addEventListener("click", addTask);

/* Enter Key Support */

taskInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});