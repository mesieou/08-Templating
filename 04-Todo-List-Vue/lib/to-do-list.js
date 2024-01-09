import { createApp } from "vue";



const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

createApp({
  data() {
    return {
      todos: todos,
      newTodo: null
    }
  },
  methods: {
    addTodo() {
      console.log("Adding a todo...")
      this.todos.push({title: this.newTodo, done: false})
      this.newTodo = '';
    },
    removeTodo(index) {
      console.log("Removing a todo...")
      this.todos.splice(index, 1)
    }
  }
}).mount('#app');
