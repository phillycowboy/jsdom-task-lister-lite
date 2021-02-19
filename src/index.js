

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.getElementById("create-task-form")
  
  const createNewTask = document.getElementById("create-new-task")
  
  const tasks = document.getElementById("tasks")
  
  newTaskDescription.addEventListener("submit", handleSubmitEvent)
  
  
});

function handleSubmitEvent(e) {
  e.preventDefault()
  let taskValue = e.target[0].value 
  tasks.innerHTML += `
    <li class="task">${taskValue}</li>
  `

};

