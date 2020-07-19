document.addEventListener("DOMContentLoaded", () => {
  // your code here
    const taskForm = document.querySelector("#create-task-form");

    const taskList = document.querySelector("#tasks");
    
    taskForm.addEventListener('submit', function(event){
              event.preventDefault()
            // console.log("I was clicked")
        const newTask = document.querySelector("#new-task-description").value

        taskList.innerHTML = `<li>${newTask}</li> <button id="delete_task">x</button`;
        const deleteBtn = document.querySelector("#delete_task");

        deleteBtn.addEventListener('click', function(){
            deleteBtn.parentNode.remove();
        });
    });
});
