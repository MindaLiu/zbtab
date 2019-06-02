<template>
  <div class="box">
    <div class="columns is-multiline">
      <div class="column is-narrow" :key="s.id" v-for="s in staff">
        <button
          class="button"
          :class="{'is-dark': selectedStaff.includes(s.id)}"
          @click="select(s.id)"
        >{{s.name}}</button>
      </div>
    </div>
    <div class="columns">
      <div class="column is-offset-10">
        <button class="button is-info" @click="submit">确定</button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data: function() {
    return {
      selectedStaff: []
    };
  },
  props: {
    gangWei: String,
    staff: Array
  },
  watch: {
    staff(){
      if(this.staff){
        this.selectedStaff = [];
      }
    }
  },
  computed: {
    maxNum() {
      let maxNum = 0;
      switch (this.gangWei) {
        case "dh":
        case "dl":
        case "dyb":
        case "jb":
        case "ld":
        case "tw":
          maxNum = 1;
          break;
        case "zd":
        case "sn":
          maxNum = 2;
          break;
        default:
          maxNum = 0;
          break;
      }
      return maxNum;
    }
  },
  methods: {
    select(id) {
      let length = this.selectedStaff.push(id);
      this.selectedStaff.splice(0, length - this.maxNum);
    },
    submit() {
      if(this.selectedStaff.length == this.maxNum){
        this.$emit("changeContent", this.selectedStaff);
      }
      else{
        alert("请选择正确数量的值班员！");
      }
    }
  }
};
</script>

<style>
</style>
