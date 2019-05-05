<template>
  <div>
    <navbar :page="page"></navbar>
    <div class="block columns is-multiline is-vcentered">
      <zbinfo :title="'技保部代班领导'" :gangWei="'jb'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd[0]"></infobox>
      </zbinfo>
      <zbinfo :title="'大夜班'" :gangWei="'dyb'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd[0]"></infobox>
      </zbinfo>
      <zbinfo :title="'导航设备室'" :gangWei="'dh'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd[0]"></infobox>
      </zbinfo>
      <zbinfo :title="'动力设备室'" :gangWei="'dl'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd[0]"></infobox>
      </zbinfo>

      <div class="column">
        <div class="box content" style="width:300px">
          <h1 class="title">info</h1>
        </div>
      </div>

      <zbinfo :title="'终端设备室'" :gangWei="'zd'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd[0]"></infobox>
        <infobox :info="content4Display.zd[1]"></infobox>
      </zbinfo>
      <zbinfo :title="'塔台值班'" :gangWei="'tw'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd[0]"></infobox>
      </zbinfo>
      <zbinfo :title="'雷达设备室'" :gangWei="'ld'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd[0]"></infobox>
      </zbinfo>
      <zbinfo :title="'枢纽设备室'" :gangWei="'sn'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd[0]"></infobox>
        <infobox :info="content4Display.zd[1]"></infobox>
      </zbinfo>
    </div>
    <modal :class="{'is-active': modalSwitch}" @close="switchModal">
      <stafflist :staff="staff" @changeContent="changeContent"></stafflist>
    </modal>
  </div>
</template>

<script>
import idb from "../idb";

import navbar from "../components/Navbar";
import zbinfo from "../components/ZbInfo";
import infobox from "../components/InfoBox";
import modal from "../components/Modal";
import stafflist from "../components/StaffList";

export default {
  data: function() {
    return {
      page: {
        title: "值班信息",
        goto: "/admin",
        button: "fas fa-2x fa-address-book"
      },
      modalSwitch: false,
      bzzToday: '',
      curList: '', //当前人员选择列表
      content: {},
      curGangWei: '', //当前选择岗位
      staff: []
    }
  },
  computed: {
      content4Display: function() {
          return {zd:[{props:['wc']},{props:['nc']}]}
      }
  },
  watch: {
    curGangWei(gangWei) {
        this.curList = gangWei == 'tw' ? 'zd' : gangWei;
        let p = {};
        if(this.curList == 'dyb'){
            p = idb.getArrangableStaffOf('inDYB', true);
        }else{            
            p = idb.getArrangableStaffOf('department', this.curList);
        }
        p.then(value => (this.staff = value));
      }
  },
  methods: {
    changeContent(selectedStaff) {
        //
        this.switchModal();
    },
    switchModal(gangWei) {

    }
  },
  components: {
    navbar,
    zbinfo,
    modal,
    stafflist,
    infobox
  }
};
</script>

<style>
.block {
  height: 800px;
  padding: 10px;
};

</style>
