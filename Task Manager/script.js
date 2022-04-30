const template = document.querySelector('#template').innerHTML
const addButton = document.querySelector('#addButton')
const output = document.querySelector('#output')
let taskDiv;
let checkbox;

let tasks = localStorage.getItem('tasks')
if (tasks != null) {
  output.insertAdjacentHTML('beforeend', tasks)
}

addButton.addEventListener('click', addTask)

output.addEventListener('click', (event) => {
  const deleteImages = document.querySelectorAll('.taskDeleteImg')
  for (let img of deleteImages) {
    if (event.target === img) {
      event.target.closest('.task').remove()
      localStorage.setItem('tasks', output.innerHTML)
    }
  }

  taskDiv = event.target.closest('.task')
  checkbox = taskDiv.childNodes[1]

  changeStateOfTask()
})


window.onload = function() {
  let divs = document.querySelectorAll('.task')
  divs.forEach(task => {
    if (task.classList[1] === undefined) return
    task.children[0].checked = true
  })
}

function addTask() {
  addButton.id = 'addButtonClicked'
  setTimeout(setAddButtonId, 300)
  console.log('123')
  const taskText = document.querySelector('#inputText').value;
  document.querySelector('#inputText').value = ''
  if (taskText === '') {
    return
  }

  const res = [
    {
      taskText: taskText
    }
  ]

  let result = Mustache.render(template, res[0])
  output.insertAdjacentHTML('beforeend', result)

  localStorage.setItem('tasks', output.innerHTML)
  document.querySelector('#inputText').focus()
}

function changeStateOfTask() {

  if (checkbox.checked === false) {
    checkbox.checked = true
    taskDiv.classList.add('checked')
  } else {
    checkbox.checked = false;
    taskDiv.classList.remove('checked')
  }

  localStorage.setItem('tasks', output.innerHTML)
}

function setAddButtonId() {
  addButton.id = 'addButton'
}