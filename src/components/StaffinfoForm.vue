<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <!-- 表单 -->
      <input class="input" type="text" value="staff.name">
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  props: {
    mode: ' ',
    staff: {}
  }
};
</script>

<style>
</style>
