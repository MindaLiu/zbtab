<template>
  <section class="hero is-dark is-bold">
    <div class="hero-body">
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
              <span class="tag is-info">{{page.title}}</span>
            </div>
          </div>
          <div class="level-right">
              <a :href="page.goto">
                  <span class="icon is-large">
                      <i :class="page.button"></i>
                  </span>
              </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: ['page']
};
</script>

<style>
</style>
