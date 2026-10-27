let titleId = document.getElementById('title');
let descriptionId = document.getElementById('description');
let statusId = document.getElementById('status');
let formBtn = document.querySelector('form button');
let taskList = document.getElementById('task-list')

formBtn.addEventListener("click", clickHandler);

function clickHandler(e) {

  e.preventDefault()

  tasks.push(
    {
      title: titleId.value,
      description: descriptionId.value,
      status: statusId.value,
    }
  )

  tasks.forEach(task => {
    taskList.innerHTML += `
    <template id="task-template">
    <li class="bg-white rounded-lg shadow p-4 flex items-start justify-between gap-4">
      <div>
        <h3 class="task-title font-semibold">${task.title}</h3>
        <p class="task-description text-sm text-slate-600 mt-1">${task.description}</p>
        <span class="task-status inline-block text-xs bg-slate-200 rounded-full px-2 py-1 mt-2"></span>
      </div>
      <div class="flex flex-col items-end gap-2">
        <select class="task-status-select border border-slate-300 rounded px-2 py-1 text-xs bg-white">
          <option value="To do">To do</option>
          <option value="In progress">${task.status}</option>
          <option value="Done">Done</option>
        </select>
        <button class="delete-btn text-sm text-red-600 hover:text-red-800 font-medium">
          Delete
        </button>
      </div>
    </li>
  </template>`});
}