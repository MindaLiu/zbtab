<template>
  <div>
    <!-- 标题栏 -->
    <navbar :currentPage="currentPage"></navbar>
    <!-- 筛选框 -->


    <!-- 人员列表 -->


    <!-- 表单 -->
    <modal :class="{'is-active':isActive}" @closeModal="closeModal">
        <staffinfo-form @submit="putStaff"></staffinfo-form>
    </modal>
    <button 
    class="button"
    @click="openModal"
    >add</button>
    
  </div>
</template>

<script>
import navbar from "../components/Navbar";
import modal from "../components/Modal";
import staffinfoForm from "../components/StaffinfoForm";
import idb from '../idb'

export default {
  data() {
    return {
      isActive: false,
      currentPage: {
          title: '人员管理',
          goto: '/'
      }
      }
  },
  methods:{
    openModal: function (){
        this.isActive = true;
    },
    closeModal: function () {
        this.isActive =false;
    },
    putStaff: function (staff) {
        // console.log(staff);
        idb.putStaff(staff);
        this.closeModal();
    }
  },
  components: {
    navbar,
    modal,
    staffinfoForm
  }
};
</script>

<style>
</style>
