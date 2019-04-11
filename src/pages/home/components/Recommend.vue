<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
        title: '浮在海上的绿洲',
        desc: '南国滨海之城，避寒胜地，有暖暖的阳光，南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光南国滨海之城，避寒胜地，有暖暖的阳光'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
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
  .item
    display: flex
    height: 1.9rem
    overflow: hidden
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height :.54rem
        font-size : .32rem
        ellipsis()
      .item-desc
        line-height :.4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height : .44rem
        background :#ff9300
        padding: 0 .2rem
        border-radius : .06rem
        margin-top : .16rem
        color: #fff
</style>
