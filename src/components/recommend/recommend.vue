<!-- 组件说明 -->
<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider>
          <div v-for="(item, index) in recommends" :key="index">
            <img :src="item.pic_url" alt="">
          </div>
        </slider>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/base/slider/slider";
import {getSwiperImg} from "@/api/index"
//import x from ''
export default {
  components: {
    Slider,
  },
  data() {
    return {
      recommends:[],
    };
  },
  computed: {},
  created() {
    this._getSwiperImg()
  },
  methods: {
    _getSwiperImg(){
      getSwiperImg().then((res)=>{
          this.recommends = res.modules[0].result
          console.log(this.recommends);
          
      })
    }
  }
};
</script>