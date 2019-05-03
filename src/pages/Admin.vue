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
      p.then(value => (this.staff = value)).then(() => console.log(this.staff));
    },
    updateStaff(staffInfo) {
      idb.updateStaff(staffInfo);
      // this.refreshStaffLib();
      console.log(this.sIndex);
      if(this.sIndex == -1){
        this.staff.push(staffInfo);
      }else{
        this.staff[this.Index] = staffInfo;
      }
      this.switchModal();
    },
    deleteStaff(key, index) {
      idb.deleteStaff(key);
      this.staff.splice(index, 1);
      // this.refreshStaffLib();
    },
    switchModal(info,index) {
      if(index){
        this.sIndex = index;
        console.log(index);
      }
      if (info) {
        this.staffInfo = info;
      } else {
        // console.log(this.staffInfo);
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
      // console.log(this.depts);
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
