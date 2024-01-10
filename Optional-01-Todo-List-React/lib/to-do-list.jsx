const App = () => {
  const [todos, changeTodos] = React.useState(
    [
      { title: "Code a to-do list", done: false },
      { title: "Eat breakfast", done: true },
      { title: "Do some exercise", done: false },
      { title: "Water the plants", done: true }
    ]
  )
  const [newTodo, setNewTodo] = React.useState({ title: '', done: false })

  const handleInputChange = (event) => {
    setNewTodo({ title: event.target.value , done: false })
  }

  const addTodo = () => {
    changeTodos([...todos, newTodo])
    setNewTodo({ title: '' , done: false })
  }

  const removeTodo = (index) => {
    changeTodos(todos.filter((todo, i) => i !== index))
  }

  const handleCheckbox = (index) => {
    changeTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos[index].done = !updatedTodos[index].done;
      return updatedTodos;
    });
  }

  return (
    <div id="app">
    {todos.map((todo, index) => (
      <div class="shadow-sm rounded px-4 py-3 mb-2 border d-flex">
        <input class="d-flex form-check-input me-1" type="checkbox" checked={todo.done} onChange={() => handleCheckbox(index)} />
        <div class="d-flex flex-grow-1">
            <div key={index}>{todo.title}</div>
            <div onClick={() => removeTodo(index)} class="ms-auto">✖️</div>
        </div>
      </div>
    ))}
    <div class="d-flex mt-4">
        <input value={newTodo.title} onChange={handleInputChange} class="form-control" type="text" placeholder="Your task goes here"/>
        <button onClick={addTodo} type="button" class="btn btn-primary">Add</button>
    </div>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
