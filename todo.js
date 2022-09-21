// variable
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// event listener for add task button
addTask.addEventListener("click", () => {
  const taskElement = document.createElement("div");
  taskElement.classList.add("task");
  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  taskElement.appendChild(li);
  let completeBtn = document.createElement("button");
  completeBtn.innerHTML = '<i class="fa fa-check"></i>';
  completeBtn.classList.add("checkTask");
  taskElement.appendChild(completeBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
  deleteBtn.classList.add("deleteTask");
  taskElement.appendChild(deleteBtn);

  if (inputTask.value === "") {
    alert("Please enter a task");
  } else {
    taskContainer.appendChild(taskElement);
    // clear input value
    inputTask.value = "";
  }

  // strike through task when complete button is clicked
  completeBtn.addEventListener("click", () => {
    completeBtn.parentElement.style.textDecoration = "line-through";
  });

  // delete task when delete button is clicked
  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentElement.remove();
  });
});
