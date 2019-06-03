<template>
  <section class="hero is-dark is-bold">
    <div class="hero-body is-paddingless">
      <div class="container">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <figure class="image is-128x128">
                <img src="../assets/logo.png">
              </figure>
            </div>
            <div class="level-item">
              <h1 class="title">技术保障部</h1>
            </div>
            <div class="level-item">
              <span class="tag is-info is-medium">{{page.title}}</span>
            </div>
          </div>
          <div class="level-right">
            <v-link :href="page.goto" :icon="page.button"></v-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VLink from "./VLink";

export default {
  props: ["page"],
  components: {VLink}
};
</script>

<style>
</style>
