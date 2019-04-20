<template>
<div>
  <div class="control">
    <div class="box is-marginless" v-for="todo in todoList">
      <span>{{todo}}</span>
      <button class="delete is-medium is-pulled-right" @click="$emit('remove',todo)"></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "TodoList",
  props: ["todoList"],
  data: function() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
