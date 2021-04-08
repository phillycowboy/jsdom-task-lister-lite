

// document.addEventListener("DOMContentLoaded", () =>  {
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
// })


// DOMCONTENTLOADED DOES NOT WORK FOR ME!! DEFER IN THE SCRIPT TAG DOES THOUGH 


