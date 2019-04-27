<template>
  <section class="hero is-dark is-bold">
    <div class="hero-body">
      <div class="level">
        <!-- 标题，随页面变化 -->
        <div class="level-left">
          <div class="level-item">
            <h1 class="title">技术保障部值班表</h1>
            <h2 class="subtitle">{{currentPage.title}}</h2>
          </div>
        </div>
        <!-- 切换展示与管理页面的按钮 -->
        <div class="level-right">
          <div class="level-item">
            <a class="button" :href="currentPage.goto">
              <span class="icon is-medium">
                <i class="fab fa-github"></i>
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
  props: ["currentPage"]
};
</script>

<style>
</style>
