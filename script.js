const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if(taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
  
  taskList.appendChild(li);
  taskInput.value = "";

  // Delete task
  li.querySelector('.delete-btn').addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // Edit task
  li.querySelector('.edit-btn').addEventListener('click', () => {
    const newTask = prompt("Edit task:", li.querySelector('span').innerText);
    if(newTask !== null && newTask.trim() !== "") {
      li.querySelector('span').innerText = newTask;
    }
  });
});
