const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

const todoContainer = document.querySelector('#todosContainer');

// TODO: Dynamically generate a list of to-dos based on `todos` array, and display them
todos.forEach(todo => {
  const result = `<div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
    <input class="d-flex form-check-input me-1" type="checkbox"${ todo.done ? 'checked' : '' }>
    <div>${todo.title}</div>
  </div>`
  todoContainer.insertAdjacentHTML('beforeend', result)
});
