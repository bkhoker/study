const todolist = [1 , 2];

let todoLListHTML = [];
for (let i = 0; i < todolist.length; i++){
  const todo = todolist[i];
  const html = `<p>${todo}</p>`;
  todoLListHTML += html;
}
console.log(todoLListHTML);

function addTodo() {
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;
  
  todolist.push(name);
  console.log(todolist);

  inputElement.value = '';
}