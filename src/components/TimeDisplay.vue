<template>
  <div>
      <p class="tag is-dark is-large">{{date | formatWeek}}</p>
      <!-- <span class="tag is-light">{{date | formatDate}}</span> -->
      <!-- <div>{{date | formatWeek}}</div> -->
      <div class="notification has-background-white">{{date | formatDate}}</div>      
  </div>
</template>

<script>
var padDate = function(value) {
  //在月份、日期、小时等小于10时在前面补0
  return value < 10 ? "0" + value : value;
};
export default {
  data: function() {
    return {
        date: new Date()
    };
    //Date中文”日期”，Date继承自Object对象，此对象提供操作日期与时间的函数
  },
  filters: {
    //过滤器
    formatDate: function() {
      //value为需要过滤的数据
      var date = new Date();
      var year = date.getFullYear();
      var month = padDate(date.getMonth() + 1);
      var day = padDate(date.getHours());
      var hours = padDate(date.getHours());
      var minutes = padDate(date.getMinutes());
      var seconds = padDate(date.getSeconds());
      
      //整理数据并返回
      return (
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds
      );
    },
    formatWeek: function(){
        var date = new Date();
        var week = "星期" + "日一二三四五六".charAt(date.getDay());
        return week;
    }
  },
  mounted: function() {
    //定时器，用于每秒刷新页面
    var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function() {
      _this.date = new Date(); //修改数据date
    }, 1000);
  },
  beforeDestory: function() {
    //清除定时器
    if (this.timer) {
      clearInterval(this.timer); //在Vue实例销毁前，清除定时器
    }
  }
};
</script>

<style>
</style>
