<template>
  <div class="column is-narrow">
    <div class="infobox card">
      <div class="card-image">
        <figure class="image is-3by4">
          <img :src="info.photoBitString" alt>
        </figure>
      </div>
      <div class="card-content">
        <p>
          <span class="icon is-small">
            <i class="fas fa-user"></i>
          </span>
          <span class="title is-6">{{info.name}}</span>
        </p>
        <p>
          <span class="icon is-small">
            <i class="fas fa-phone"></i>
          </span>
          <span>{{info.name}}</span>
        </p>
        <p>
          <span class="icon is-small">
            <i class="fas fa-mobile"></i>
          </span>
          <span> {{info.name}}</span>
        </p>
      </div>
      <footer class="card-footer">
        <span class="card-footer-item icon" :class="{'has-text-info': wc}" title="外场车司机">
          <i class="fas fa-car"></i>
        </span>
        <span class="card-footer-item icon" :class="{'has-text-info': nc}" title="内场车司机">
          <i class="fas fa-car-side"></i>
        </span>
        <span class="card-footer-item icon" :class="{'has-text-info': dy}" title="共产党员">
          <i class="fas fa-ribbon"></i>
        </span>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      wc: this.info.props.indexOf("wc") != -1 ? true : false,
      nc: this.info.props.indexOf("nc") != -1 ? true : false,
      dy: this.info.props.indexOf("dy") != -1 ? true : false
    };
  },
  props: {
    info: Object
  }
};
</script>

<style>
.card-content {
  padding: 0 20px 0 20px;
}
.infobox{
  width: 200px;
}
</style>
