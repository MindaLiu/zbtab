<template></template>

<script>
export default {
  data: function() {
    return {
      selectedStaff: []
    };
  },
  props: {
    // title: String,
    staff: Array
    // staffFrom: String
  },
  methods: {
    submit() {
      this.$emit("changeContent",this.selectedStaff);
    }
  }
};
</script>

<style>
</style>
