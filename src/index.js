

// document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  const form = document.querySelector('#create-task-form');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ul = document.querySelector('#tasks');
    let newTask = e.target[0].value;
    let li = document.createElement('li');
    li.innerText = newTask;
    ul.appendChild(li);
    form.reset();

  })

// });

