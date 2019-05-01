<template>
  <div class="box">
    <div class="box">
      <button
        class="button is-light"
        @click="selectedFilter = filter.key"
        v-bind:key="filter.key"
        v-for="filter in filters"
      >{{filter.title}}</button>
    </div>
    <staff-list :staffList="staffList">
      <slot></slot>
    </staff-list>
  </div>
</template>

<script>
import staffList from "./StaffList";
import idb from "../idb";
export default {
  data() {
    return {
      filters: [
        {
          title: "部领导",
          key: "jb"
        },
        {
          title: "终端室",
          key: "zd"
        },
        {
          title: "导航室",
          key: "dh"
        },
        {
          title: "枢纽室",
          key: "sn"
        },
        {
          title: "雷达室",
          key: "ld"
        },
        {
          title: "动力室",
          key: "dl"
        }
      ],
      selectedFilter: "zd",
      staffList: []
    };
  },
  watch: {
    selectedFilter (filter) {
      this.refreshList(filter);
    }
  },
  created: function () {
    this.refreshList(this.selectedFilter);
  },
  methods: {
    refreshList: function (filter){
      let p = idb.getStaff('dept', filter);
      p.then(value => this.staffList = value).then(console.log(this.staffList));
    }
  },
  components: {
    staffList
  }
};
</script>

<style>
</style>
