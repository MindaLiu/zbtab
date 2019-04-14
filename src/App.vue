<template>
  <div id="app">
    <div>
      <h1 class="title">TodoList</h1>
      <input type="text" placeholder="todo" v-model="todoItem" v-on:keyup.enter="addTodo">
      <TodoList v-bind:todoList="todoList" @remove="removeTodo"/>
    </div>
  </div>
</template>

<script>
// import TodoInput from './components/TodoInput.vue'
import TodoList from "./components/TodoList.vue";

export default {
  name: "app",
  data: function() {
    return {
      todoItem: "",
      todoList: []
    };
  },
  methods: {
    addTodo: function(params) {
      this.todoList.push(this.todoItem);
      this.todoItem = "";
    },
    removeTodo: function(todo) {
      var pos = this.todoList.indexOf(todo);
      this.todoList.splice(pos, 1);
    }
  },
  components: {
    // TodoInput,
    TodoList
  }
};
</script>

<style>
</style>
