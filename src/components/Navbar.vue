<template>
  <nav>
    //logo
    <div class="log">
      <img>
    </div>
    //标题，随页面变化
    <h1 class>{{pageTitle}}</h1>
    //切换展示与管理页面的按钮
    <button class="button is-pulled-right">
      <span class="icon">
        <i class="fas fa-home"></i>
      </span>
    </button>
  </nav>
</template>

<script>
import routes from '../routes'

export default {
    props: {

    },
};
</script>

<style>
</style>
