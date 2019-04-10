<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img5.imgtn.bdimg.com/it/u=3409737275,2744185252&fm=26&gp=0.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img0.imgtn.bdimg.com/it/u=2033318980,3797978556&fm=26&gp=0.jpg'
      }, {
        id: '003',
        imgUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=330142140,1934812749&fm=173&app=25&f=JPEG?w=640&h=373&s=FF24556EEC2EA73449E039B902003013'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #633eff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
