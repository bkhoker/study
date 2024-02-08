const todolist = [{
  name:'go out' ,
  dueDate:'02/07/2027'
 }, { name:'sleep',
   dueDate:'02/09/2024'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = [];
  for (let i = 0; i < todolist.length; i++){
  const todoObject = todolist[i];
  // const name = todoObject.name;
  //const dueDate = todoObject.dueDate;
  const { name, dueDate } = todoObject;
  const html = `<p>
    ${name} ${dueDate}
    <button onclick="
      todolist.splice(${i},1);
      renderTodoList();
    ">Delete</button>
    </p>
  `;
  todoListHTML += html;
  }

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