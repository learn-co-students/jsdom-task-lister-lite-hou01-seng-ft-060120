document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form");
  const formInput = document.getElementById("new-task-description");
  const formTasksUL = document.getElementById("tasks");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const newTaskLI = document.createElement("li");

    newTaskLI.innerHTML = `${formInput.value} <button id="task-delete-button">x</button>`;
    formInput.value = "";
    formTasksUL.appendChild(newTaskLI);

    const taskDeleteButton = document.getElementById("task-delete-button");
    taskDeleteButton.addEventListener("click", function() {
      taskDeleteButton.parentNode.remove();
    });

  });

});
