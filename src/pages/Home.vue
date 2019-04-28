<template>
    <div>
        <navbar :currentPage="currentPage"></navbar>
    </div>
</template>

<script>
import navbar from "../components/Navbar";
import idb from '../idb'

export default {
 data() {
    return {
      currentPage: {
          title: ' ',
          goto: '/admin'
      }
      }
  },
  components: {
      navbar
  }
}
</script>

<style>

</style>
