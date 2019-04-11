<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
<!--          <button class="item-button">查看详情</button>-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f8/29dfa785277839.jpg_r_640x214_7d051523.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    height:0
    overflow: hidden
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height :.54rem
      font-size : .32rem
      ellipsis()
    .item-desc
      line-height :.4rem
      color: #ccc
      ellipsis()
</style>
