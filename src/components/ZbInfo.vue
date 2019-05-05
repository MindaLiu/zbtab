<template>
  <div class="column">
    <article class="message is-dark">
      <div class="message-header">
        <p>{{title}}</p>
        <button class="button">
          <span class="icon is-small">
            <i class="fas fa-user-cog"></i>
          </span>
        </button>
      </div>
      <div class="message-body">
        <div class="columns is-centered">
            <slot></slot>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    gangWei: String
  },
  methods: {
    openStaffList(gangWei) {
      this.$emit("openStaffList", gangWei);
    }
  }
};
</script>

<style>

</style>
