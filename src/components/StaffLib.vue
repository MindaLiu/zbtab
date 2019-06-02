<template>
  <div class="lib container has-background-grey-dark">
    <div class="filter box">
      <button
        class="button is-rounded"
        :class="{'is-dark': dept.active}"
        :key="dept.key"
        @click="changeDept(dept.key)"
        v-for="dept in depts"
      >{{dept.title}}</button>
      <button class="button is-pulled-right is-dark is-rounded" @click="openStaffInfo(-1)"><i class="fas fa-user-plus"></i></button>
    </div>
    <div class="box">
      <table class="table is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>手机</th>
          <th>参与大夜班</th>
          <th>是否班组长</th>
          <th>其他</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="s.id" v-for="(s, index) of staff">
          <td>{{ index + 1 }}</td>
          <td>{{ s.name }}</td>
          <td>{{ s.telephone }}</td>
          <td>
            <!-- <i class="fas fa-check" v-if="s.inDYB"></i>
            <i class="fas fa-times" v-else></i> -->
            <span>{{s.inDYB ? '是' : '否'}}</span>
          </td>
          <td>
            <!-- <i class="fas fa-check" v-if="s.bzz"></i>
            <i class="fas fa-times" v-else></i> -->
            <span>{{s.bzz ? '是' : '否'}}</span>
          </td>
          <td>
            <!-- {{ s.props.join(' | ') }} -->
            <!-- <i class="fas fa-car" v-show="s.props.includes('nc')" title="内场司机"></i> 
            <i class="fas fa-car-side" v-show="s.props.includes('wc')" title="外场司机"></i> 
            <i class="fas fa-ribbon" v-show="s.props.includes('dy')" title="党员"></i> -->
            <span v-if="s.props.includes('nc')">【内场司机】</span>
            <span v-if="s.props.includes('wc')">【外场司机】</span>
            <span v-if="s.props.includes('dy')">【党员】 </span>
          </td>
          <td>
            <button class="button is-dark is-rounded" @click="openStaffInfo(index)">修改</button> 
            <button class="button is-dark is-rounded" @click="deleteStaff(index)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>

export default {
  // data: function() {
  //   return {
      
  //   };
  // },
  props: {
    staff: Array,
    depts: Array
  },
  methods: {
    changeDept(dept) {      
      this.$emit('refreshStaffLib', dept);
    },
    openStaffInfo(index) {
      // console.log(index);
      this.$emit('openStaffInfo',index);
    },
    deleteStaff(id,index){
      this.$emit('deleteStaff',id,index);
    }
  }
  
};
</script>

<style>
.lib{
  height: 1000px;
}
.table th{
  text-align: center;
}
.table td{
  text-align: center;
}
/* .staff {
  width: 148px;
  height: 240px;
  padding: 10px;
  cursor: pointer;
}
.staff::before {
  background-image: -webkit-gradient(
    linear,
    right top,
    left top,
    from(#ff8a00),
    to(#da1b60)
  );
  background-image: linear-gradient(to left, #ff8a00, #da1b60);
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}
.staff:hover {
  background-color: #eeeeeee0;
} */
</style>
