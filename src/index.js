document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const newTaskDesc = document.getElementById('new-task-description');

  document.getElementById('create-task-form').addEventListener('submit', event => {
    event.preventDefault();
    let text = event.target[0].value;
    console.log(text);
    let ul = document.getElementById('tasks');
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = text
    
  })
});
