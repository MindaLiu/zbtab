<template>
  <div>
    <navbar :page="page"></navbar>
    <stafflib
      :depts="depts"
      :staff="staff"
      @refreshStaffLib="refreshStaffLib"
      @openStaffInfo="switchModal"
      @deleteStaff="deleteStaff"
    ></stafflib>
    <modal :class="{'is-active': modalSwitch}" @close="switchModal">
      <staffinfo :staffInfo="staffInfo" @submit="updateStaff(staffInfo)"></staffinfo>
    </modal>
  </div>
</template>

<script>
import photoSrc from "./../assets/480x640.png";
import idb from "../idb";
import jsonData from "../data.json";

import navbar from "../components/Navbar";
import stafflib from "../components/StaffLib";
import modal from "../components/Modal";
import staffinfo from "../components/StaffInfo";

export default {
  data: function() {
    return {
      page: {
        title: "人员管理",
        goto: "/",
        button: "fas fa-2x fa-home"
      },
      sIndex: -1,
      staff: [],
      depts: jsonData.departments,
      selectedDept: "",
      modalSwitch: false,
      staffInfo: {
        name: "",
        phone: "",
        telephone: "",
        department: "",
        bzz: false,
        inDYB: false,
        props: [],
        photoBitString: photoSrc,
        arrangeable: true
      }
    };
  },
  methods: {
    refreshStaffLib(dept) {
      this.selectedDept = dept;
      let p = idb.getStaff("inDept", dept);
      p.then(value => (this.staff = value));
    },
    updateStaff(staffInfo) {
      //1.当前（部门）表格新增,刷新视图
      if (this.sIndex == -1 && staffInfo.department == this.selectedDept) {
        this.staff.push(staffInfo);
        console.log('sss');
      }
      //2.新增其他（部门）不用刷新视图
      //3，编辑当前后仍在当前（部门）表格，更新
      if(this.sIndex > -1 && staffInfo.department == this.selectedDept) {
        //用下标对数组赋值 vue不更新
        this.$set(this.staff, this.sIndex, staffInfo);
      }
      if(this.sIndex > -1 && staffInfo.department != this.selectedDept) {
        //用下标对数组赋值 vue不更新
        this.staff.splice(this.sIndex,1);
      }
      //
      //更新数据库
      idb.updateStaff(staffInfo);
      this.switchModal(-1);
    },
    deleteStaff(index) {
      console.log(index);
      idb.deleteStaff(this.staff[index].id);
      this.staff.splice(index, 1);
      // this.refreshStaffLib();
    },
    switchModal(index) {
      // index  -1 新增，>-1 修改，undefined
      // console.log(index);
      this.sIndex = index;
      if (this.sIndex > -1) {
        this.staffInfo = Object.assign({}, this.staff[this.sIndex]);
      } else {
        this.staffInfo = Object.assign({}, this.$options.data().staffInfo);
      }
      this.modalSwitch = !this.modalSwitch;
    }
  },
  watch: {
    selectedDept: function(newVal, oldVal) {
      this.depts = this.depts.map(function(dept) {
        if (dept.key == newVal) {
          dept.active = true;
        }
        if (dept.key == oldVal) {
          dept.active = false;
        }
        return dept;
        // dept.key == oldVal ? dept.active = false : '';
      });
    }
  },
  components: {
    navbar,
    stafflib,
    modal,
    staffinfo
  }
};
</script>

<style>
</style>
