<template>
  <div >
    <ul>
      <li v-for="todo in todoList">
        {{todo}}
        <button @click="$emit('remove',todo)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todoList"],
  data: function() {
    return {

    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
