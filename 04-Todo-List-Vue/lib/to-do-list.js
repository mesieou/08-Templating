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
      todos: todos
    }
  }
}).mount('#app');
