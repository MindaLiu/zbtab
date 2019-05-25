<template>
  <div class="box">
    <div class="columns">
      <div class="column is-9">
        <div class="columns">
          <div class="column is-2">
            <label class="label is-pulled-right">姓名：</label>
          </div>
          <div class="column is-4">
            <div class="control">
              <input class="input" type="text" v-model="localStaffInfo.name">
            </div>
          </div>
          <div class="column is-2">
            <label class="label is-pulled-right">手机：</label>
          </div>
          <div class="column is-4">
            <div class="control">
              <input class="input" type="text" v-model="localStaffInfo.telephone">
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-3">
            <label class="label is-pulled-right">值班电话：</label>
          </div>
          <div class="column is-3">
            <div class="control">
              <input class="input" type="text" v-model="localStaffInfo.phone">
            </div>
          </div>
          <div class="column is-2">
            <label class="label is-pulled-right">部门：</label>
          </div>
          <div class="column is-4">
            <div class="control">
              <div class="select">
                <select v-model="localStaffInfo.department">
                  <option disabled value="">请选择</option>
                  <option value="jb">部领导</option>
                  <option value="zd">终端室</option>
                  <option value="sn">枢纽室</option>
                  <option value="ld">雷达室</option>
                  <option value="dh">导航室</option>
                  <option value="dl">动力室</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-5">
            <label class="label is-pulled-right">是否班组长：</label>
          </div>
          <div class="column is-1">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" id="nc" value="nc" v-model="localStaffInfo.bzz">
              </label>
            </div>
          </div>
          <div class="column is-5">
            <label class="label is-pulled-right">参与大夜班：</label>
          </div>
          <div class="column is-1">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" id="inDYB" v-model="localStaffInfo.inDYB">
              </label>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column is-4">
            <label class="label is-pulled-right">其他：</label>
          </div>
          <div class="column is-8">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox" id="nc" value="nc" v-model="localStaffInfo.props">
                内场司机
              </label>
              <label class="checkbox">
                <input type="checkbox" id="wc" value="wc" v-model="localStaffInfo.props">
                外场司机
              </label>
              <label class="checkbox">
                <input type="checkbox" id="dy" value="dy" v-model="localStaffInfo.props">
                共产党员
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- 图片上传、预览 -->
      <div class="column is-3">
        <figure class="image is-3by4">
          <img :src="localStaffInfo.photoBitString">
        </figure>
        <div class="file">
          <label class="file-label is-inline-block" style="padding-left: 5px;padding-top: 5px;">
            <input class="file-input" type="file" accept="image/*" @change="preview">
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">上传照片</span>
            </span>
          </label>
        </div>
      </div>
    </div>

    <!-- 提交按钮 -->
    <div class="columns">
      <div class="column is-offset-10">
        <button class="button is-info" @click="submit">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    localStaffInfo() {
     return this.staffInfo;
    }
  },
  props:['staffInfo'],
  // props: {
  //   staffInfo: Object,
  // },
  methods: {
    fileCheck() {},
    preview(event) {
      let file = event.target.files[0];
      if(!file)return;
      if(file.size/1024 > 100){
        alert('请上传小于100k的图片');
        return;
      } 
      let reader = new FileReader();
      reader.onerror =() => alert('图片加载失败请重新上传');
      reader.onload = (event) => {
        //data:image/*;base64
        let base64str = btoa(event.target.result); 
        this.localStaffInfo.photoBitString = 'data:' + file.type + ';base64,' + base64str;
      };
      reader.readAsBinaryString(file);
    },
    submit() {
      this.$emit("submit", this.localStaffInfo);
      // console.log(this.localStaffInfo);
    }
  },
  components: {}
};
</script>

<style>
</style>
