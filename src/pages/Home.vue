<template>
  <div>
    <navbar :page="page"></navbar>
    <div class="block columns is-multiline is-vcentered">
      <zbinfo :title="'技保部代班领导'" :gangWei="'jb'" @openStaffList="switchModal">
        <infobox
          :info="content4Display.jb ? content4Display.jb[0] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
      </zbinfo>
      <zbinfo :title="'大夜班'" :gangWei="'dyb'" @openStaffList="switchModal">
        <infobox
          :info="content4Display.dyb ? content4Display.dyb[0] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
      </zbinfo>
      <zbinfo :title="'导航设备室'" :gangWei="'dh'" @openStaffList="switchModal">
        <infobox
          :info="content4Display.dh ? content4Display.dh[0] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
      </zbinfo>
      <zbinfo :title="'动力设备室'" :gangWei="'dl'" @openStaffList="switchModal">
        <infobox
          :info="content4Display.dl ? content4Display.dl[0] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
      </zbinfo>

      <div class="column is-narrow">
        <div class="box content" style="width:300px">
          <h1 class="title">info</h1>
          <p class="title"></p>
        </div>
      </div>

      <zbinfo :title="'终端设备室'" :gangWei="'zd'" @openStaffList="switchModal">
        <infobox :info="content4Display.zd ? content4Display.zd[0] : undefined"></infobox>
        <infobox :info="content4Display.zd ? content4Display.zd[1] : undefined"></infobox>
      </zbinfo>
      <zbinfo :title="'塔台值班'" :gangWei="'tw'" @openStaffList="switchModal">
        <infobox :info="content4Display.tw ? content4Display.tw[0] : undefined"></infobox>
      </zbinfo>
      <zbinfo :title="'雷达设备室'" :gangWei="'ld'" @openStaffList="switchModal">
        <infobox :info="content4Display.ld ? content4Display.jb[0] : undefined"></infobox>
      </zbinfo>
      <zbinfo :title="'枢纽设备室'" :gangWei="'sn'" @openStaffList="switchModal">
        <infobox :info="content4Display.sn ? content4Display.sn[0] : undefined"></infobox>
        <infobox :info="content4Display.sn ? content4Display.sn[1] : undefined"></infobox>
      </zbinfo>
    </div>
    <modal :class="{'is-active': modalSwitch}" @close="switchModal">
      <stafflist :staff="staff" :gangWei="curGangWei" @changeContent="changeContent"></stafflist>
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
      content: [],
      curGangWei: "", //当前选择岗位
      staff: []
    };
  },
  created: function() {
    idb.getAllZbRecord().then(value => (this.content = value || []));
    // console.log(this.content);
  },
  computed: {
    content4Display: function() {
      let content4Display = {};
      this.content.forEach(element => {
        let recordInfo = {
          isBzzToday: element.isBzzToday
        };
        let staffInfo = {};
        idb
          .getOneStaff(element.staffID)
          // .then(v => (console.log(v)));
          .then(value => (staffInfo = value || {}))
          .then(v => {
            let info = Object.assign({}, staffInfo, recordInfo);
            // console.log(staffInfo);
            content4Display[element.gangWei] = content4Display[element.gangWei] || [];
            content4Display[element.gangWei].push(info);
            
          });
      });
      console.log(content4Display);
      return content4Display;
    },
    curDept: function() {
      return this.curGangWei == "tw" ? "zd" : this.curGangWei;
    },
    bzzToday: function() {
      let bzzToday = "";
      this.content.forEach(element => {
        bzzToday = element.isBzzToday ? element.staffID : bzzToday;
      });
      return bzzToday;
    }
  },
  watch: {
    curGangWei() {
      // this.curDept = gangWei == 'tw' ? 'zd' : gangWei;
      // console.log('xxx');
      let p = {};
      let temp = [];
      if (this.curDept == "dyb") {
        p = idb.getStaff("dyb", true);
      } else {
        // p = idb.getArrangableStaffOf("department", this.curDept);
        p = idb.getStaff("inDept", this.curDept);
        // p.then(v => console.log(v));
        // p.then(value => (this.staff = value || []));
      }
      p.then(value => (this.staff = value || []));
      //需要删除 base64图片属性，防止内存占用过大
      // this.staff = temp;
    }
  },
  methods: {
    changeContent(selectedStaff) {
      let record2beChanged = this.content.filter((element, index, array) => {
        //刷新 content
        if (element.gangWei == this.curGangWei) {
          // let staff = selectedStaff.shift();   //改变 selectedStaff
          let staffID = selectedStaff.slice(index, index + 1)[0]; // 不改变 selectedStaff
          array[index].staffID = staffID;
          array[index].isBzzToday = false;
        }
        return element.gangWei == this.curGangWei;
      });
      //更新数据库
      if (record2beChanged.lenth > 0) {
        // 修改记录
        record2beChanged.forEach(element => idb.updateZbRecord(element));
      } else {
        // 新增记录
        selectedStaff.forEach(e => {
          idb.updateZbRecord({
            staffID: e,
            gangWei: this.curGangWei,
            isBzzToday: false
          });
        });
      }
      this.switchModal();
    },
    switchModal(gangWei) {
      this.curGangWei = gangWei || "";
      this.modalSwitch = !this.modalSwitch;
    },
    changeBZZ(staffID) {
      let oldBzzToday = this.bzzToday;
      let record2beChanged = this.content.filter((element, index, array) => {
        //刷新content
        array[index].isBzzToday = element.staffID == staffID ? true : false;
        return element.staffID == staffID || element.staffID == oldBzzToday;
      });
      // 更新数据库
      record2beChanged.forEach(element => idb.updateZbRecord(element));
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
}
</style>
