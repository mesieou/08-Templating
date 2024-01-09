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
      this.todos.push({title: this.newTodo, done: false})
      this.newTodo = '';
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  }
}).mount('#app');
