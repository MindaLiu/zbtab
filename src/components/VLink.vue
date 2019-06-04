<template>
  <a :href="href"
     @click="go"
  >
    <!-- <span class="icon is-large" :class="{'has-text-info' : isActive}"> -->
    <span class="icon is-large">
      <i :class="icon"></i>
    </span>
  </a>
</template>

<script>
import routes from "../routes";

export default {
  props: {
    href: {
      type: String,
      required: true
    },
    icon: {
        type: String,
        required: true
    }
  },
  // computed: {
  //   isActive() {
  //     return this.href === this.$root.currentRoute;
  //   }
  // },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, routes[this.href], this.href);
    }
  }
};
</script>

<style>
</style>
