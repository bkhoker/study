const todolist = [{
  name: 'wash dishes',
  dueDate: '2024 - 02 - 13'
},
{
  name: 'clean house',
  dueDate: '2024 - 02 - 15'
}
];

renderTodoList();

function renderTodoList(){
  let todoListHTML = [];
  todolist.forEach(function(todoObject, index){
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todolist.splice(${index},1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  })

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todolist.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';
  renderTodoList();
}