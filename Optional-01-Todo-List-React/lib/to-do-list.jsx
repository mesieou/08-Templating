const App = () => {
  const [todos, changeTodos] = React.useState(
    [
      { title: "Code a to-do list", done: false },
      { title: "Eat breakfast", done: true },
      { title: "Do some exercise", done: false },
      { title: "Water the plants", done: true }
    ]
  )

  return (
    <div id="app">
    {todos.map((todo, index) => (
      <div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
        <input class="d-flex form-chech-input me-1" type="checkbox"/>
        <div class="d-flex flex-grow-1">
            <div key={index}>{todo.title}</div>
            <div class="ms-auto">✖️</div>
        </div>
      </div>
    ))}
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
