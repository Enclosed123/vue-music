<!-- 组件说明 -->
<template>
  <div class='slider'>
    <div class="slider-group">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
  //import x from ''
  export default {
    name: "Slider",
    components: {

    },
    directives: {

    },//自定义指令
    filters: {

    },//过滤
    props: {

    },
    data () {
      return {

      };
    },
    computed: {

    },
    watch: {

    },
beforeCreate() {}, //生命周期 - 创建之前
created() {

},//生命周期 - 创建之后
beforeMount() {}, //生命周期 - 挂载之前
mounted() {

},//生命周期 - 挂载之后
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
deactivated() {}, 
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
    methods: {

    },
  }
</script>
<style lang="stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>