<template>
  <div class="box">
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">姓名 :</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <input class="input" type="text" v-model="staff.name">
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">手机 :</label>
      </div>
      <div class="field-body">
        <div class="field is-narrow">
          <div class="control">
            <input class="input" type="text" v-model="staff.telephone">
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">部门 :</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <div class="select">
              <select v-model="staff.dept">
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
    </div>

    <div class="field is-horizontal">
      <div class="field-label">
        <label class="label">司机 :</label>
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" id="nc" value="nc" v-model="staff.driver">
              内场
            </label>
            <label class="checkbox">
              <input type="checkbox" id="wc" value="wc" v-model="staff.driver">
              外场
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <!-- <button class="button is-primary" @click="$emit('submit',staff)">
          提交
        </button> -->
        <button class="button is-primary" @click="submit()">
          提交
        </button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staff: {
          name: '',
          telephone: '',
          dept: '',
          driver: []
      }
    };
  },
  methods: {
      submit(){
          this.staff = Object.assign({},this.$options.data().staff )
          console.log(this.staff);
      }
  },
  components: {}
};
</script>

<style>
</style>
