<template>
  <div class="column is-narrow">
    <div class="infobox card">
      <svgbadge class="svgButton" v-if="info.bzz" :state="info.isBzzToday" @switchState="changeBZZ"></svgbadge>
      <div class="card-image">
        <figure class="image is-3by4">
          <img :src="info.photoBitString" alt>
        </figure>
      </div>
      <div class="card-content">
        <p>
          <span class="icon">
            <i class="fas fa-user"></i>
          </span>
          <span class="title is-4" style="padding-left:25px;">{{info.name}}</span>
        </p>
        <!-- <p>
          <span class="icon is-small">
            <i class="fas fa-phone"></i>
          </span>
          <span>{{info.phone}}</span>
        </p>-->
        <p>
          <span class="icon">
            <i class="fas fa-mobile"></i>
          </span>
          <span class="title is-5 infoText">{{info.telephone}}</span>
        </p>
      </div>
      <footer class="card-footer">
        <span class="card-footer-item icon " :class="{'has-text-grey-lighter': !this.info.props.includes('wc') }" title="外场车司机">
          <i class="fas fa-car"></i>
        </span>
        <span class="card-footer-item icon " :class="{'has-text-grey-lighter': !this.info.props.includes('nc')}" title="内场车司机">
          <i class="fas fa-car-side"></i>
        </span>
        <span class="card-footer-item icon " :class="{'has-text-grey-lighter': !this.info.props.includes('dy')}" title="共产党员">
          <i class="fas fa-ribbon"></i>
        </span>
      </footer>
    </div>
  </div>
</template>

<script>
import svgbadge from "./SvgBadge";
import defaultPhoto from "../assets/480x640.png"
import { defaultCoreCipherList } from 'constants';
export default {
  // data: function() {
  //   return {
  //     wc: this.info.props.includes('nc'),
  //     nc: this.info.props.includes('wc'),
  //     dy: this.info.props.includes('dy')
  //   }
  // },
  props: {
    info: {
      type: Object,
      default: function() {
        return {
          id: "",
          photoBitString: defaultPhoto,
          name: "Name",
          // phone: '',
          telephone: "Mobile Phone",
          props: [],
          bzz: false,
          isBzzToday: false
        };
      }
    }
  },
  methods: {
    changeBZZ: function() {
      this.$emit("changeBZZ", this.info.id);
    }
  },
  components: {
    svgbadge
  }
};
</script>

<style>
.card-content {
  padding: 0 20px 0 20px;
}
.infobox {
  width: 200px;
}
.svgButton {
  position: relative;
  z-index: 1;
  float: right;
  top: -24px;
  right: -24px;
}
</style>
