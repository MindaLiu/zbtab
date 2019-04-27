<template>
  <div class="modal">
    <div class="modal-background"
    @click="$emit('closeModal')"
    ></div>
    <div class="modal-content">
      <!-- content -->
      <slot></slot>
    </div>
    <button 
    class="modal-close is-large" 
    aria-label="close"
    @click="$emit('closeModal')"
    ></button>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
