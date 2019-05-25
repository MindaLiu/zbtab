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
        <infobox
          :info="content4Display.zd ? content4Display.zd[0] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
        <infobox
          :info="content4Display.zd ? content4Display.zd[1] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
      </zbinfo>
      <zbinfo :title="'塔台值班'" :gangWei="'tw'" @openStaffList="switchModal">
        <infobox
          :info="content4Display.tw ? content4Display.tw[0] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
      </zbinfo>
      <zbinfo :title="'雷达设备室'" :gangWei="'ld'" @openStaffList="switchModal">
        <infobox
          :info="content4Display.ld ? content4Display.ld[0] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
      </zbinfo>
      <zbinfo :title="'枢纽设备室'" :gangWei="'sn'" @openStaffList="switchModal">
        <infobox
          :info="content4Display.sn ? content4Display.sn[0] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
        <infobox
          :info="content4Display.sn ? content4Display.sn[1] : undefined"
          @changeBZZ="changeBZZ"
        ></infobox>
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
      content4Display: {
        jb: [],
        dyb: [],
        dl: [],
        dh: [],
        zd: [],
        ld: [],
        tw: [],
        sn: []
      },
      curGangWei: "", //当前选择岗位
      staff: []
    };
  },
  created: function() {
    this.refreshContent();
  },
  computed: {
    //   content4Display: function() {
    //     let content4Display = {};
    //     this.content.forEach(element => {
    //       let recordInfo = {
    //         isBzzToday: element.isBzzToday
    //       };
    //       let staffInfo = {};
    //       idb
    //         .getOneStaff(element.staffID)
    //         // .then(v => (console.log(v)));
    //         .then(value => {
    //           staffInfo = value || {};
    //           let info = Object.assign({}, staffInfo, recordInfo);
    //           // console.log(staffInfo);
    //           content4Display[element.gangWei] = content4Display[element.gangWei] || [];
    //           content4Display[element.gangWei].push(info);

    //         });
    //     });
    //     // console.log(content4Display);
    //     return content4Display;
    //   },
    maxNum() {
      let maxNum = 0;
      switch (this.curGangWei) {
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
        p = idb.getStaff("dyb", 1);
      } else {
        // p = idb.getArrangableStaffOf("department", this.curDept);
        p = idb.getStaff("inDept", this.curDept);
        // p.then(v => console.log(v));
        // p.then(value => (this.staff = value || []));
      }
      p.then(value => (this.staff = value || []));
      //需要删除 base64图片属性，防止内存占用过大
      // this.staff = temp;
    },
    // content() {
    //   this.content.forEach(e => {
    //     let recordInfo = {
    //       isBzzToday: e.isBzzToday
    //     };
    //     let staffInfo = {};
    //     idb.getOneStaff(e.staffID).then(value => {
    //       staffInfo = value || {};
    //       let info = Object.assign({}, staffInfo, recordInfo);
    //       // console.log(staffInfo);

    //       this.content4Display[e.gangWei].push(info);
    //     });
    //   });
    // }
    content() {
      this.content.forEach(e => {
        
        let recordInfo = {
          isBzzToday: e.isBzzToday
        };
        let staffInfo = {};
        idb.getOneStaff(e.staffID).then(value => {
          this.curGangWei = e.gangWei;
          staffInfo = value || {};
          let info = Object.assign({}, staffInfo, recordInfo);
          let length = this.content4Display[e.gangWei].push(info);
          if (this.maxNum !== 0) {
            this.content4Display[e.gangWei].splice(0, length - this.maxNum);
          }
        }).then(x => this.curGangWei = '');
      });
      // this.curGangWei = '';
    }
  },
  methods: {
    changeContent(selectedStaff) {
      if (selectedStaff.length == 0) {
        return;
      }
      let record2beChanged = this.content.filter(e => {
        return e.gangWei == this.curGangWei;
      });

      if (record2beChanged.length > 0) {
        //刷新 content
        this.content.forEach((e, index, array) => {
          if (e.gangWei == this.curGangWei) {
            let staffID = selectedStaff.shift();
            let s = array[index];
            s.staffID = staffID;
            s.isBzzToday = false;
            array.splice(index, 1, s);
          }
        });
        //数据库修改记录
        record2beChanged.forEach(e => idb.updateZbRecord(e));
      } else {
        selectedStaff.forEach(e => {
          let newRecord = {
            staffID: e,
            gangWei: this.curGangWei,
            isBzzToday: false
          };
          //数据库新增记录
          idb.updateZbRecord(newRecord).then(x => this.refreshContent());
          // 添加 content         
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
        let s = array[index];
        s.isBzzToday = element.staffID == staffID ? true : false;
        array.splice(index, 1, s);
        return element.staffID == staffID || element.staffID == oldBzzToday;
      });
      // 更新数据库
      record2beChanged.forEach(element => idb.updateZbRecord(element));
    },
    refreshContent(){
      idb.getAllZbRecord().then(value => (this.content = value || []));
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
