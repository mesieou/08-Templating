const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

const template = document.querySelector("#todoItemTemplate");
const todosContainer = document.querySelector("#todosContainer");


todos.forEach(todo => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.title').textContent = todo.title;
  if (todo.done) {
    clone.querySelector('input').setAttribute('checked', 'checked');
  }
  todosContainer.appendChild(clone);
});
