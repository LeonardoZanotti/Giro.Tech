const addBtn = document.querySelector('.add');
const taskField = document.querySelector('.taskInput');
const list = document.querySelector('.list');

addBtn.addEventListener('click', addTask);

function addTask() {
  if (taskField.value.length === 0) {
    return;
  }
  console.log('dale');
  const taskContainer = list.appendChild(document.createElement('div'));
  const task = taskContainer.appendChild(document.createElement('p'));
  const doneBtn = taskContainer.appendChild(document.createElement('i'));
  const deleteBtn = taskContainer.appendChild(document.createElement('i'));
  deleteBtn.className = 'fas fa-trash-alt';
  doneBtn.className = 'far fa-square';
  taskContainer.className = 'taskContainer';
  task.className = 'task';
  task.innerHTML = taskField.value.charAt(0).toUpperCase() + taskField.value.slice(1);
  taskField.value = '';
  deleteBtn.addEventListener('click', deleteTask);
  doneBtn.addEventListener('click', checkTask);
  function checkTask(e) {
    doneBtn.className = doneBtn.className === 'far fa-square' ? 'fas fa-check-square' : 'far fa-square';
    e.target.previousSibling.style.textDecoration =
      e.target.previousSibling.style.textDecoration === 'line-through' ? 'unset' : 'line-through';
  }
  function deleteTask(e) {
    confirm('Are you sure you want to delete this item?') && e.target.parentElement.remove();
  }
}
